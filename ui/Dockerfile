FROM ubuntu:jammy-20230425

ARG BASE_DIR=/var/www

ARG WEBSITE_NAME=ui

ENV WEBSITE_NAME=${WEBSITE_NAME}

RUN apt-get update -yq && apt-get upgrade -yq && \
    apt-get install -yq

RUN apt-get update -yq && apt-get upgrade -yq && \
    apt-get install -yq curl && \
    curl -sL https://deb.nodesource.com/setup_19.x | bash - && \
    apt-get install -yq nano nodejs build-essential apache2

RUN npm install -g npm

RUN echo "ServerName dev.hitalent.in" >> /etc/apache2/apache2.conf

COPY ./ht_ui .

RUN mkdir ${BASE_DIR}/${WEBSITE_NAME}

COPY ./ht_ui/fullchain.pem /etc/ssl/certs/

COPY ./ht_ui/privkey.pem /etc/ssl/private/

RUN a2enmod ssl

RUN a2enmod headers

RUN a2enmod rewrite

RUN a2enmod proxy

RUN a2enmod proxy_http

EXPOSE 443 80

RUN  service apache2 restart

ENTRYPOINT ["/bin/bash", "/var/www/ui.sh"]
