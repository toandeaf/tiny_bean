#!/bin/zsh

# set pwd as src-tauri
source .env

GENERATED_MODELS_FILE="./src/db/generated/models.rs"

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
diesel_ext --model > "${GENERATED_MODELS_FILE}"

sed -i '' 's/#!\[allow(clippy::all)\]/#!\[allow(clippy::all)\] \ninclude!("imports.rs");/g' "${GENERATED_MODELS_FILE}"

# Search for the string "Queryable" and add "Serialize,Deserialize,Insertable" before it
sed -i '' 's/Queryable/Serialize, Deserialize, Insertable, Queryable/g' "${GENERATED_MODELS_FILE}"
