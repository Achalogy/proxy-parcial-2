FROM oven/bun:latest

WORKDIR /app
COPY package.json bun.lockb* ./
RUN bun install --production

COPY . .

ARG ADAPTER
ARG DATABASE_URL
ARG REST_URL

ENTRYPOINT ["bun", "run", "start"]