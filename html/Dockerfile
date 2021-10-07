FROM mysql:8.0.26

RUN apt update
RUN apt install php apache2 -y
COPY . /var/www/html

ENV MYSQL_ROOT_PASSWORD r00tpa55 
ENV MYSQL_USER itlaba 
ENV MYSQL_PASSWORD passwd@123 
ENV MYSQL_DATABASE ITLAB

CMD service apache2 start && docker-entrypoint.sh mysqld 

EXPOSE 80
