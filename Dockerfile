FROM node:14


# Create app directory
WORKDIR /usr/src/app


# Copy and install dependencies
COPY package*.json ./
RUN npm install


# Bundle app source
COPY . .
EXPOSE 3000
CMD ["npm", "start"]