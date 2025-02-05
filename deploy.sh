#!/bin/bash

echo "pulling latest"
docker pull samsla/smart-home-relay:latest

echo "removing old"
docker rm -f smart-home-relay

echo "running new"
docker run --env-file .env-relay -d --name smart-home-relay --network host samsla/smart-home-relay
