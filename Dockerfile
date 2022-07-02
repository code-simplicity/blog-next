# node环境
FROM node:16.15.1
# 作者
MAINTAINER bugdr
# 环境
ENV NODE_ENV=production
# IP地址
ENV HOST 0.0.0.0
# 创建容器
RUN mkdir -p /blogNext
# 切换容器目录
WORKDIR /blogNext
# 暴露端口
EXPOSE 3000
# 安装依赖
RUN yarn
# 构建打包
RUN yarn build
# 运行
CMD ["yarn", "start"]