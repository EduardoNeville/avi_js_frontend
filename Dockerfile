FROM node:alpine

RUN echo "We are in the frontend Dockerfile"

WORKDIR /avi_frontend

COPY package*.json .

RUN npm install 

COPY . .

ENV VITE_HOST=0.0.0.0
ENV VITE_PORT=$PORT
ENV PROXY_API=$PROXY_API

EXPOSE 5173

RUN npm run build

CMD ["npm", "run", "dev"]
