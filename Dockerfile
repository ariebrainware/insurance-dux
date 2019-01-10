FROM node:latest

# Create app workdir
WORKDIR /

# Install dependencies
COPY . .

RUN npm i

CMD ["npm", "start"]