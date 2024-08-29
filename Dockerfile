FROM wangjiehaha/mhr_calc:builder0.1 AS builder

WORKDIR /tmp

COPY . .

RUN  npm run build

FROM nginx:1.27.0-alpine

COPY --from=builder /tmp/dist /usr/share/nginx/html

