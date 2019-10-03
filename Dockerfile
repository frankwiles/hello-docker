FROM node:10 as js-builder

RUN mkdir /build
WORKDIR /build
COPY . /build/
RUN npm install
RUN npm run prod

FROM nginx:1.17.4-alpine

COPY --from=js-builder /build/dist/ /usr/share/nginx/html