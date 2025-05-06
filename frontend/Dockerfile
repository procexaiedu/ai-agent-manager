FROM node:lts-alpine

WORKDIR /app

# Copiar apenas os arquivos necessários para instalar as dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Expor a porta que o Next.js usa
EXPOSE 3000

# Comando para iniciar o servidor de desenvolvimento do Next.js
CMD ["npm", "run", "dev"]
