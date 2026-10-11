# Base image Node.js Alpine siêu nhẹ
FROM node:20-alpine

# Thư mục làm việc
WORKDIR /app

# Sao chép file mã nguồn backend
COPY server.js .

# Khai báo cổng ứng dụng lắng nghe
EXPOSE 8080

# Chạy ứng dụng
CMD ["node", "server.js"]
