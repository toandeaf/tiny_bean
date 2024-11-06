#!/bin/zsh

cd "$(dirname "$0")"

echo "Building tiny_bean_ui."
bun run build > /dev/null 2>&1

cd dist
echo "Zipping tiny_bean_ui."
zip -r ../tiny_bean_ui.zip . > /dev/null 2>&1

cd ..

echo "Shipping tiny_bean_ui."
scp -r tiny_bean_ui.zip jaketoan@tinybean.local:/home/jaketoan/tiny_bean_ui.zip

echo "Unzipping tiny_bean_ui and cleaning up."
ssh jaketoan@tinybean.local 'unzip -o /home/jaketoan/tiny_bean_ui.zip -d /home/jaketoan/tiny_bean_ui > /dev/null 2>&1'
ssh jaketoan@tinybean.local 'rm /home/jaketoan/tiny_bean_ui.zip'

rm tiny_bean_ui.zip

echo "tiny_bean_ui shipped!"
