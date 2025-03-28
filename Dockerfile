FROM node:20-alpine

WORKDIR /distance_calculator_fe

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run","dev"]