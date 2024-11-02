#!/bin/zsh

# Zip up the dist folder
zip -r dist.zip dist

# This script is used to ship the tinybean project to the server
scp -r dist.zip jaketoan@tinybean.local:/home/jaketoan/dist.zip

# Unzip the file in tinybean server
ssh jaketoan@tinybean.local 'unzip -o /home/jaketoan/dist.zip -d /home/jaketoan/'
ssh jaketoan@tinybean.local 'rm /home/jaketoan/dist.zip'

rm dist.zip
