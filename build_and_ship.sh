#!/bin/zsh

echo "Building and shipping UI"
./ui/build_and_ship.sh

echo "Building and shipping server"
./server/build_and_ship.sh

echo "tinyBean is shipped!"
