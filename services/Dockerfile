FROM ubuntu:jammy-20230522

RUN apt-get update -yq && apt-get upgrade -yq && \
    apt-get install -yq curl && \
    curl -sL https://deb.nodesource.com/setup_19.x | bash - && \
    apt-get install -yq nano nodejs build-essential

RUN npm install -g npm

RUN mkdir services

COPY . ./services

WORKDIR /services

RUN npm i

EXPOSE 8000

CMD ["bash", "-c", "npm start"]
