#!/bin/bash

cd /home/ec2-user/app/CloudComputingProject

npm install

pkill node || true

nohup node server.js > output.log 2>&1 &
