ARG VERSION_ARG
ARG PORT_ARG

FROM node:$VERSION_ARG

ENV PORT $PORT_ARG

WORKDIR /app
COPY package.json ./
COPY . ./

RUN rm -rf node_modules && npm install --legacy-peer-deps
RUN npm install webpack webpack-cli -g
RUN npm install html-webpack-plugin -g
RUN npm install -D react-scripts
RUN npm install --force
#RUN yarn install --frozen-lockfile

EXPOSE $PORT 3001


CMD ["npm", "start"]
