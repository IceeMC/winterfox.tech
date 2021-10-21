FROM node:17-alpine

LABEL MAINTAINER="Noel <cutie@floofy.dev>"
RUN apk update && apk add git ca-certificates

WORKDIR /opt/winterfox
COPY . .
RUN yarn global add typescript next
RUN yarn

# Why `NODE_OPTIONS`?
# Webpack errors with the new OpenSSL engine Node uses
# see: https://github.com/webpack/webpack/issues/14532
RUN NEXT_TELEMETRY_DISABLED=1 NODE_OPTIONS=--openssl-legacy-provider NODE_ENV=production yarn build
RUN rm -rf src

ENTRYPOINT [ "next", "start" ]
