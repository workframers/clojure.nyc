FROM nginx
EXPOSE 80
COPY nginx.conf /etc/nginx/nginx.conf
COPY public/ /usr/share/nginx/html
