FROM circleci/node:latest-browsers as BUILD_IMAGE
ENV NODE_OPTIONS=--max_old_space_size=4096
WORKDIR /usr/src/app
# RUN yarn config set registry https://registry.npm.taobao.org
COPY package.json ./
RUN yarn
COPY ./ ./
ENV NODE_OPTIONS='--max_old_space_size=4096 --openssl-legacy-provider'
ENV EEE=production
RUN yarn build

FROM nginx
WORKDIR /usr/share/nginx/html/
RUN mkdir admin
COPY --from=BUILD_IMAGE /usr/src/app/dist/ ./admin/
COPY default.conf /etc/nginx/conf.d/
EXPOSE 3002
