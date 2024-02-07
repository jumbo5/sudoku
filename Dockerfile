#Stage 1
FROM node:18.16.0 as builder
WORKDIR /app
COPY package*.json .
COPY yarn*.lock .
RUN yarn install
COPY . .
RUN yarn build
CMD yarn start