# .env dosyasından çevresel değişkeni oku
source .env

# Docker image oluştur
docker build --build-arg VITE_API_KEY=$VITE_API_KEY -t movie-search-app .

# Docker container başlat
docker run -p 80:80 movie-search-app
