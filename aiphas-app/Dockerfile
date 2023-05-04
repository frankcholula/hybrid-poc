FROM node:18.16.0
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY .env ./
COPY backend/ ./backend
RUN npm i
CMD ["npm", "run", "start"]
