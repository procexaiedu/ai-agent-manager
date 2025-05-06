FROM node:lts-alpine

WORKDIR /app

# Copiar apenas os arquivos necessários para instalar as dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Expor a porta que o NestJS usa
EXPOSE 3001

# Comando para iniciar o servidor de desenvolvimento do NestJS
CMD ["npm", "run", "start:dev"]
