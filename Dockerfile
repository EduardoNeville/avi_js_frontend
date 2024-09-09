FROM node:alpine

WORKDIR /usr/src/avi_js_frontend

COPY package.json .

RUN npm install 

COPY . .

EXPOSE 8080

RUN npm run build
