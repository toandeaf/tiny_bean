#!/bin/zsh

# set pwd as src-tauri
source .env

GENERATED_DATA_DIR="./src/db/generated/models.rs"

# Check if the diesel CLI is installed
if ! command -v diesel &> /dev/null
then
    echo "Diesel CLI could not be found. Please install it by running 'cargo install diesel_cli --no-default-features --features sqlite'"
    exit
fi

# Check if the diesel ext CLI is installed
if ! command -v diesel_ext &> /dev/null
then
    echo "Diesel Ext CLI could not be found. Please install it by running 'cargo install diesel_ext_cli'"
    exit
fi

# Run the migration - applies it to the DB and generates the schema.rs file
diesel migration run

# Generate the models file from the schema.rs file
diesel_ext --model > "${GENERATED_DATA_DIR}"

# Add diesel imports to the generated models file
echo '// Required to resolve imports.
include!("imports.rs");' >> "${GENERATED_DATA_DIR}"

# Search for the string "Queryable" and add "Serialize,Deserialize" before it
sed -i '' 's/Queryable/Serialize, Deserialize, Queryable/g' "${GENERATED_DATA_DIR}"