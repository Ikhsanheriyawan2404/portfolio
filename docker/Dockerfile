# ===== STAGE 1: Build Aplikasi =====
FROM node:18-alpine AS builder

# Buat direktori kerja
WORKDIR /app

# Salin package.json dan install dependencies
COPY package*.json ./
RUN npm install --force

# Salin semua file dan build aplikasi
COPY . .
RUN npm run build

# ===== STAGE 2: Jalankan dengan NGINX =====
FROM nginx:stable-alpine

# Salin file build hasil stage pertama ke direktori NGINX
COPY --from=builder /app/dist /usr/share/nginx/html

# (Opsional) Ganti konfigurasi NGINX untuk mendukung SPA seperti React Router
# Jika kamu pakai React Router, uncomment bagian berikut ini dan pastikan file nginx.conf tersedia
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Buka port 80
EXPOSE 80

# Jalankan NGINX
CMD ["nginx", "-g", "daemon off;"]
