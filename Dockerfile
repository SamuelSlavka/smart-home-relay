# builder
FROM node:18 AS base

COPY package.json ./

# install deps
RUN npm install

# copy source
COPY src ./src
COPY tsconfig.json ./tsconfig.json

RUN npm run build

# runner
FROM arm32v7/node:18

# Copy node modules and build directory
COPY --from=base /dist /dist
COPY --from=base ./node_modules ./node_modules

EXPOSE 4203
CMD ["dist/src/server.js"]
