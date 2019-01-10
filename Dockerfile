FROM node:latest

# Create app workdir
WORKDIR /

# Install dependencies
COPY package*.json ./

RUN npm i

CMD ["node", "index.js"]