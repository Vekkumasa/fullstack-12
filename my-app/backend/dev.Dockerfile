FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN CI=true npm run test

CMD ["npm", "run", "dev"]