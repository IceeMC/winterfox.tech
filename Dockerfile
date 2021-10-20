FROM node:17-alpine

LABEL MAINTAINER="August <cutie@floofy.dev>"
RUN apk update && apk add git ca-certificates

WORKDIR /opt/winterfox.tech
COPY . .
RUN npm i -g typescript next
RUN yarn
RUN NEXT_TELEMETRY_DISABLED=1 NODE_ENV=production yarn build
RUN rm -rf src

ENTRYPOINT [ "next", "start" ]
