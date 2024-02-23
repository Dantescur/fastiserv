FROM node:20
WORKDIR /app
COPY package.json pnpm-lock.yaml tsconfig.json ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm run build
EXPOSE 3000
CMD ["node", "dist/src/app.js"]

# FROM node:14-alpine
# WORKDIR /app
# COPY package.json pnpm-lock.yaml tsconfig.json ./
# RUN npm install -g pnpm
# RUN pnpm install
# COPY . .
# RUN pnpm run build
# EXPOSE 3000
# CMD ["node", "dist/app.js"]

