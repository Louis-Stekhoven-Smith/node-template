ARG APP_ROOT=/usr/app

FROM node:18 as compile

WORKDIR /es-analytics

RUN echo "--- :npm: Install Dependencies ..."
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm ci

RUN echo "--- :npm: Building ..."
COPY . .
RUN npm run build

FROM compile as test
RUN echo "--- :jest: Running unit tests ..."
RUN npm test

FROM node:18 as es-analytics
ARG NODE_ENV=production
ENV APP_ROOT=/usr/app
WORKDIR /usr/app

COPY --from=compile /es-analytics/package*.json .
COPY --from=compile /es-analytics/dist ./dist
COPY --from=compile /es-analytics/config ./config
COPY ./docker/app-image/entrypoint.sh /entrypoint.sh

RUN npm ci --only=production

ENTRYPOINT [ "/entrypoint.sh" ]
