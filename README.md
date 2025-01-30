# Nuxt3 Supabase Starter 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PNPM](https://img.shields.io/badge/pnpm-8.9.0-%23F69220)](https://pnpm.io/)

Modern Nuxt3 starter template with fullstack capabilities. Features Supabase integration, Tailwind CSS styling, Element Plus components, and enterprise-grade tooling.

## ✨ Features

- ⚡ Nuxt3 with Vue3 Composition API
- 🗄️ Supabase v2 integration
- 🎨 Tailwind CSS + Element Plus UI
- 🏪 Pinia state management with persistence
- 📐 ESLint + Antfu code style
- 🔒 Commitlint + Husky Git hooks
- 🧩 Auto-animate integration
- 📦 Optimized PNPM workspace

## 🛠️ Tech Stack

![Tech Stack](https://skillicons.dev/icons?i=nuxtjs,vue,tailwind,supabase,postgres,js,git)

## 📦 Installation

1. Clone repository
```bash
git clone https://github.com/linhemin/nuxt3-supabase-starter.git
```

2. Install dependencies
```bash
pnpm install
```

3. Setup environment variables
```bash
cp .env.example .env
```

## ⚙️ Configuration

Update `.env` file with your Supabase credentials:
```env
SUPABASE_URL=your-project-url
SUPABASE_KEY=your-anon-key
```

## 🚀 Usage

### Development
```bash
pnpm run dev
```

### Production Build
```bash
pnpm run build
```

### Linting
```bash
pnpm run lint
```

### Generate Static Site
```bash
pnpm run generate
```

## 📂 Project Structure

```
├── assets
├── components
├── composables
├── layouts
├── pages
├── plugins
├── public
├── server
├── stores     # Pinia stores
├── utils
└── app.vue
```

## 🔧 Recommended Tooling

- [Nuxt DevTools](https://devtools.nuxtjs.org/)
- [Vue DevTools](https://devtools.vuejs.org/)
- [Supabase Studio](https://supabase.com/dashboard)

## 📄 License

MIT © HEMIN LIN
