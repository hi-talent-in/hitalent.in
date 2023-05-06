FROM ubuntu:jammy-20230425

ARG BASE_DIR=/var/www

ARG WEBSITE_NAME=ui

ENV WEBSITE_NAME=${WEBSITE_NAME}

RUN apt-get update -yq && apt-get upgrade -yq && \
    apt-get install -yq curl git nano apache2

RUN curl -sL https://deb.nodesource.com/setup_19.x | bash - && \
    apt-get install -yq nodejs build-essential

RUN npm install -g npm

RUN echo "ServerName 0.0.0.0" >> /etc/apache2/apache2.conf

COPY ./ht_ui .

RUN mkdir ${BASE_DIR}/${WEBSITE_NAME}

RUN a2enmod headers

RUN a2enmod rewrite

EXPOSE 80

RUN  service apache2 restart

ENTRYPOINT ["/bin/bash", "/var/www/ui.sh"]
















# add below lines in .htaccess file to build folder
# Options -MultiViews
# RewriteEngine On
# RewriteBase /
# RewriteCond %{REQUEST_FILENAME} !-f
# RewriteRule ^ index.html [QSA,L]