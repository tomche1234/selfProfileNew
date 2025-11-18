# Hey, I'm Tom👋

A clean, fast, and modern personal profile/portfolio built with **Nuxt 3**.

Live site → [https://tom-che.netlify.app/](https://tom-che.netlify.app/)

![Nuxt 3](https://img.shields.io/badge/Nuxt-3-00DC82?logo=nuxt.js&logoColor=white)
![Vue 3](https://img.shields.io/badge/Vue.js-3-4FC08D?logo=vuedotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwind-css)

---

## Tech Stack

- **Nuxt 3** + **Nitro** (SSR/SSG ready)
- **Vue 3** (Composition API + `<script setup>`)
- **TypeScript**
- **Tailwind CSS** (fully styled & responsive)
- **EmailJS** (serverless contact form)
- **Material Symbols** (lightweight Google icons)
- Deployment: **Vercel** or **Netlify** (zero-config)

---

## Features

- Fully responsive (mobile → desktop)
- Smooth contact form with **honey-pot** anti-spam protection
- Blazing-fast performance & excellent lighthouse scores
- Reusable, well-organized Vue components
- Minimal & elegant design – perfect for a personal brand

---

## Set up EmailJS (.env file)

Copy the example file:

```bash
cp .env.example .env
```

Fill in your own EmailJS credentials in .env
.env.example (already included in repo)

```bash
SERVICE_ID = your_service_id_here
TEMPLATE_ID = your_template_id_here
PUBLIC_KEY = your_public_key_here
```


## Local Development (using Yarn)

```bash
# Clone the repo
git clone https://github.com/tomche1234/selfProfileNew.git
cd selfProfileNew

# Install dependencies
yarn install

# Start dev server
yarn dev