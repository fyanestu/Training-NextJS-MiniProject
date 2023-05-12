# Training Mega - Next JS - Mini Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
# or
yarn
yarn dev
# or
pnpm
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## Requirement

- Node JS v16
- Fake API (<https://jsonplaceholder.typicode.com/posts>)

---

## Installation and Basic Setup

```sh
npx create-next-app@latest training-bankmega-nextjs-miniproject
cd training-bankmega-nextjs-miniproject

√ Would you like to use TypeScript with this project? ... No
√ Would you like to use ESLint with this project? ... No
√ Would you like to use Tailwind CSS with this project? ... Yes
√ Would you like to use `src/` directory with this project? ... No
√ Use App Router (recommended)? ... No
√ Would you like to customize the default import alias? ... Yes
√ What import alias would you like to configured? ... @app/*

# Path alias akan tersimpan di file ./jsconfig.json

# Installing sass
npm install sass

# Buat folder dan file di ./styles/sass/main.scss
# Buat folder dan file di ./styles/sass/base/index.scss
# Update postcss.config.js

# Install postcss plugins
npm install postcss-import cssnano postcss-plugin

# Data fetching https://jsonplaceholder.typicode.com/posts
npm install axios

# Edit pages/_app.js
# Jalankan script
npm run dev

# Untuk SSR
npm run build

# Untuk run production bisa pakai
npm run start

# Untuk membantu melakukan validasi tipe data bisa menginstall prop-types
npm install prop-types

# Untuk membuat Next API, melakukan validasi API
npm install next-connect@0.13.0
npm install joi@17.7.1  next-joi@2.2.1

# Untuk membantu membuat halaman login bisa menggunakan next-auth
npm install next-auth
# Install moment untuk kebutuhan handling date time
npm install moment

# Untuk Database ORM bisa menggunakan Prisma
npm install prisma @prisma/client
# Buat file .env terlebih dahulu, silakan cek examplenya
npx prisma
npx prisma init
# Edit file di ./prisma/schema.prisma
npx prisma format
npx prisma validate
npx prisma migrate dev
# Bisa juga langsung tanpa migrate dev (Code First) without migrate
npx prisma db push
# Jika sudah ada DB (DB First)
npx prisma db pull


# Install VS Code extension "REST CLient" kemudian buat file .\test-api.rest
# Lakukan test api menggunakan file *.rest
```

---

## Mmini project menggunakan nextJS dan module yang terkait sebagai berikut

### 1. Data Fetching

```text
- Server Side rendering ( SSR )
- Static Site Generation ( SSG )
```

### 2. Fetching API Third Party ( Dummy API )

```text
- implement ke dalam component
  -  maping data aray di component ( SSR, Combine )
  -  mapping data array di component ( CSR (client side rendering) )
  -  mapping data array di component ( Combine ( CSR, SSR ) )
```

### 3. Page

```text
- Static Route
- Dynamic Route ( include ( hit API ) )
```

### 4. Create API di nextJS

```text
- implementasi method ( GET , POST, DELETE )
```

### 5. Create Middleware for Private Route ( include authentaction ( package `next-auth` ) )

---

## Reference

- [Next JS Docs](https://nextjs.org/docs)
- [Next Auth Docs](https://next-auth.js.org/getting-started/introduction)
- [Prisma ORM Docs](https://www.prisma.io/docs)
