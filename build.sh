#!/bin/bash -ilex
echo "--------开始构建博客门户------->"
pwd
whoami
#先停止原来老的，然后删除
sudo docker stop blog-next
sudo docker rm blog-next
#删除原来老的image
sudo docker rmi -f blog-next
#构建image
sudo docker build -t blog-next .
echo "启动新镜像"
#启动
sudo docker-compose up -d