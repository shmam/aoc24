#!/bin/bash

if [ $# -ne 1 ]; then
    echo "Usage: $0 <number>"
    exit 1
fi

number=$1

go build -o ${number}/${number}go ${number}.go

hyperfine --runs 5  --warmup 2 --shell=none "./${number}go" "node ${number}/${number}.js" "bun ${number}/${number}.js"

rm ${number}go