FROM node:24.22.3-alpine@sha256:116b800c3754b440ee0aa3ed2f20f5bf3d99a554bfd9adeea09ea8017f6e85f5 AS builder
WORKDIR /app
ENV NUXT_TELEMETRY_DISABLED=1 HUSKY=0
ENV BASE_URL=/24/seiryo/ NUXT_PUBLIC_BASE_URL=/24/seiryo/
RUN npm install --global pnpm@10.34.9
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --ignore-scripts
COPY . .
RUN pnpm run build

FROM node:24.22.3-alpine@sha256:116b800c3754b440ee0aa3ed2f20f5bf3d99a554bfd9adeea09ea8017f6e85f5 AS production
# Apply OS security updates and omit build/package-management tools from the server.
RUN apk upgrade --no-cache \
    && rm -rf /usr/local/lib/node_modules /opt/yarn* \
    && rm -f /usr/local/bin/npm /usr/local/bin/npx /usr/local/bin/yarn /usr/local/bin/yarnpkg /usr/local/bin/corepack
WORKDIR /app
ENV NODE_ENV=production HOST=0.0.0.0 PORT=8080
ENV BASE_URL=/24/seiryo/ NUXT_PUBLIC_BASE_URL=/24/seiryo/
COPY --from=builder --chown=node:node /app/.output ./.output
USER node
EXPOSE 8080
CMD ["node", ".output/server/index.mjs"]
