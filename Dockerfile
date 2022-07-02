# Install dependencies only when needed
FROM node:16.5.0 AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /blogNext
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:16.5.0 AS builder
WORKDIR /blogNext
COPY . .
COPY --from=deps /blogNext/node_modules ./node_modules
RUN yarn build && yarn install --production --ignore-scripts --prefer-offline

# Production image, copy all the files and run next
FROM node:16.5.0 AS runner
WORKDIR /blogNext

ENV NODE_ENV production

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["yarn", "start"]
