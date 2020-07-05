#!/bin/bash

docker build -t catbookdb .
echo "===> image was created"
docker run --name catbookdb -e MYSQL_ROOT_PASSWORD=supersecret -p 3306:3306 -d catbookdb:latest  
echo "===> instance was created"