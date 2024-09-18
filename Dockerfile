FROM node:alpine

RUN echo "We are in the frontend Dockerfile"

WORKDIR /usr/src/avi_js_frontend

COPY package*.json .

RUN npm install 

COPY . .

ENV VITE_HOST=0.0.0.0
ENV VITE_PORT=$PORT
ENV PROXY_API=$PROXY_API

EXPOSE 5000

CMD [ "npm", "run", "build" ]
