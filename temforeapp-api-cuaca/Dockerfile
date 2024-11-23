# Gunakan Node.js versi 18 sebagai base image
FROM node:18

# Set working directory di dalam container
WORKDIR /usr/src/app

# Copy file package.json dan package-lock.json ke container
COPY package*.json ./

# Instal dependencies
RUN npm install

# Copy seluruh kode aplikasi ke container
COPY . .

# Expose port 8080 agar aplikasi dapat diakses
EXPOSE 8080

# Jalankan server aplikasi
CMD ["node", "server.js"]
