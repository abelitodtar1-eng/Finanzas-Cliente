FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install --omit=dev
COPY dashboard_inventario_oscuro.html .
COPY server.js .
EXPOSE 3000
CMD ["node", "server.js"]
