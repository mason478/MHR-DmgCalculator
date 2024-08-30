FROM node:18-alpine AS builder

WORKDIR /tmp

COPY package*.json ./

RUN npm install

COPY . .

RUN  npm run build

FROM nginx:1.27.0-alpine

COPY --from=builder /tmp/dist /usr/share/nginx/html

