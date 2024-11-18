#!/bin/zsh

# Set the pwd to the directory of the script
cd "$(dirname "$0")"

if ! docker info > /dev/null 2>&1; then
  echo "Docker is not running. Please start Docker."
  exit 1
fi

if ! command -v cross > /dev/null 2>&1; then
  echo "cross is not installed. Please install cross with cargo. i.e. cargo install cross"
  exit 1
fi

echo "Building tiny_bean_server for Raspberry Pi Zero"
cross build --target=arm-unknown-linux-gnueabihf --release > /dev/null 2>&1

echo "Stopping tinyBean"
ssh jaketoan@tinybean.local 'sudo systemctl stop tinybean.service'

echo "Copying tiny_bean_server to Raspberry Pi Zero"
scp -r target/arm-unknown-linux-gnueabihf/release/tiny_bean jaketoan@tinybean.local:/home/jaketoan/tiny_bean_server

echo "Starting tinyBean on server"
ssh jaketoan@tinybean.local 'sudo systemctl start tinybean.service'

echo "tiny_bean_server shipped!"
