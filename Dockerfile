FROM node:18

ENV NODE_ENV=development

WORKDIR /app

COPY . .

RUN apt-get update && \
    apt-get install build-essential librdkafka-dev -y

RUN npm install

CMD ["tail", "-f", "/dev/null"]