FROM node:alpine


WORKDIR /usr/src/avi_js_frontend

COPY package*.json .

RUN npm install 

COPY . .

RUN npm run build

EXPOSE $PORT

ENV VITE_HOST=0.0.0.0
ENV VITE_PORT=$PORT
ENV PROXY_API=$PROXY_API

CMD [ "npm", "start" ]
