FROM ubuntu:jammy-20230425

ARG BASE_DIR=/var/www

ARG WEBSITE_NAME=backend

ENV WEBSITE_NAME=${WEBSITE_NAME}

COPY . /var/www/${WEBSITE_NAME}

RUN apt-get update -yq && apt-get upgrade -yq && \
    apt-get install -yq curl git nano apache2 gcc ca-certificates openssl

RUN curl -sL https://deb.nodesource.com/setup_19.x | bash - && \
    apt-get install -yq nodejs build-essential

RUN npm install -g npm

WORKDIR /var/www/${WEBSITE_NAME}

RUN npm i

RUN echo "ServerName 0.0.0.0" >> /etc/apache2/apache2.conf

RUN a2enmod proxy

RUN a2enmod proxy_http

RUN service apache2 restart

EXPOSE 8000