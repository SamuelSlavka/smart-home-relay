# builder
FROM node:18 AS base

WORKDIR /usr/src/app

COPY package*.json ./

# install deps
RUN npm install

# copy source
COPY . .

RUN npm run build

# runner
FROM node:18

WORKDIR /usr/src/app

# Copy node modules and build directory
COPY --from=base /usr/src/app/dist ./dist
COPY --from=base /usr/src/app/node_modules ./node_modules

EXPOSE 4203
CMD ["node","dist/index.js"]
