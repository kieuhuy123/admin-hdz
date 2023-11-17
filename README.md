# Admin Ecommerce
#### Mô tả:
Project này được xây dựng bằng Nextjs, Tailwind CSS, Prisma, MySQL và Clerk Auth. Admin được thiết kế để quản lý các khía cạnh khác nhau cửa web app, với trải nhiệm và điều hướng liền mạch.

#### Tính năng chính:
- Admin dashboard vừa là CMS, vừa là trung tâm API.
- Sử dụng MySQL, Prisma và PlanetScale để quản lý cơ sở dữ liệu mạnh mẽ và khả năng mở rộng.
- Quản lý nhiều cửa hàng, cho phép kiểm soát nhiều danh mục và sản phẩm khác nhau thông qua một CMS duy nhất (Ví dụ: bạn có thể có "cửa hàng giày" và "cửa hàng laptop" và admin dashboard sẽ tạo các tuyến API cho tất cả các cửa hàng đó.)
- Tạo, cập nhật và xóa danh mục sản phẩm để tổ chức một cách hiệu quả.
- Tạo, cập nhật và xóa sản phẩm một cách dễ dàng.
- Tạo, cập nhật và xóa các bộ lọc như "Color" và "Size" cho sản phẩm.
- Tạo, cập nhật và xóa các "banner", có thể chọn hiện thị ở trang chủ hoặc trang danh mục.
- Kiểm soát sản phẩm "nổi bật" và hiện thị trên trang chủ.
- Quản lý đơn hàng, doanh số và doanh thu thông qua admin dashboard.
- Utilizes MySQL, Prisma, and PlanetScale for robust database management and scalability.
### Prerequisites

**Node version 18.x**

### Cloning the repository

```shell
git clone https://github.com/kieuhuy123/admin-hdz.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL=''
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
STRIPE_API_KEY=
FRONTEND_STORE_URL=http://localhost:3001
STRIPE_WEBHOOK_SECRET=
```

### Connect to PlanetScale and Push Prisma

```shell
npx prisma generate
npx prisma db push
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
