#!/bin/bash -ilex
echo "--------开始构建博客门户------->"
pwd
whoami
#先停止原来老的，然后删除
docker stop blog-next
docker rm blog-next
#删除原来老的image
docker rmi -f blog-next
#构建image
docker build -t blog-next .
echo "启动新镜像"
#启动
docker-compose up -d