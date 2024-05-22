# Base image olarak Node.js kullanıyoruz
FROM node:18 AS build

# Uygulamamızın çalışacağı dizini oluşturuyoruz
WORKDIR /app

# Package.json ve package-lock.json dosyalarını kopyala
COPY package.json package-lock.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulamamızın tüm dosyalarını kopyala
COPY . .

# Uygulamamızı build et
RUN npm run build

# Path: Dockerfile
# Base image olarak Nginx kullanıyoruz
FROM nginx:alpine

# Nginx yapılandırmasını kopyala
COPY nginx.conf /etc/nginx/nginx.conf

# Uygulamamızın build edilmiş dosyalarını kopyala
COPY --from=build /app/build /usr/share/nginx/html

# Nginx servisini başlat
CMD ["nginx", "-g", "daemon off;"]