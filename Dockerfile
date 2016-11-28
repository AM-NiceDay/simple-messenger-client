FROM smebberson/alpine-nginx-nodejs

ADD . /app
WORKDIR /app

RUN npm install
RUN npm run build

COPY nginx.conf /etc/nginx/nginx.conf
