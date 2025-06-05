FROM nginx:1.27.4-alpine-slim
COPY dist /usr/share/nginx/html
