FROM node:20.11.1 AS builder
WORKDIR /app

ADD . .

RUN npm install -g prettier
RUN npm install
RUN npm run build

FROM node:20.11.1 AS runner
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build .

ENV PORT=8000

EXPOSE 8000

ENTRYPOINT [ "node", "./server.js" ];
