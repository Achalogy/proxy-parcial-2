FROM oven/bun:latest

WORKDIR /app
COPY package.json bun.lockb* ./
RUN bun install --production

COPY . .

ARG ADAPTER
ARG DATABASE_URL
ARG REST_URL

RUN echo "ADAPTER=${ADAPTER}" > .env \
 && echo "DATABASE_URL=${DATABASE_URL}" >> .env \
 && echo "REST_URL=${REST_URL}" >> .env

ENTRYPOINT ["bun", "run", "start"]