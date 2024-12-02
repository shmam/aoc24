#!/bin/bash

if [ $# -ne 1 ]; then
    echo "Usage: $0 <number>"
    exit 1
fi

number=$1

go build -o ${number}go ${number}.go

hyperfine --runs 5  --warmup 2 --shell=none "./${number}go" "node ${number}.js" "bun ${number}.js"

rm ${number}go