#!/bin/bash
docker build -t dyoshikawa/freee-kintai:latest ../freee-kintai
docker run --env-file=`pwd`/.env --rm dyoshikawa/freee-kintai:latest node main.js
