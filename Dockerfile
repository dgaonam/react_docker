ARG VERSION_ARG
ARG PORT_ARG

FROM node:$VERSION_ARG

ENV PORT $PORT_ARG

WORKDIR /app
COPY package.json ./
COPY . ./
RUN yarn install --frozen-lockfile

EXPOSE $PORT 3001



CMD ["yarn", "start"]
