#!bin/bash
while : 
do
    pm2 delete index.js
    sleep 1
    pm2 start index.js
    sleep 2
    pm2 monit
    sleep 3     
done