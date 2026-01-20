# MI2B PBL Landing Page

Landing page futuristik untuk showcase Project Based Learning kelas MI2B - Politeknik Negeri Padang.

## 🎨 Features

- ✅ Design futuristik dengan Neon Green + Black theme
- ✅ Animasi glow, glassmorphism, dan particle effects
- ✅ Preview 6 project PBL dengan iframe
- ✅ Mobile responsive design
- ✅ Built with Next.js 16 + Tailwind CSS

## 🚀 Deploy ke Vercel

### Cara 1: Via GitHub (Recommended)

1. **Push ke GitHub:**
   ```bash
   git init
   git add .
   git commit -m "MI2B PBL Landing Page"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/pbl-landing-page.git
   git push -u origin main
   ```

2. **Deploy di Vercel:**
   - Buka [vercel.com](https://vercel.com)
   - Login dengan GitHub
   - Klik "Add New Project"
   - Import repository `pbl-landing-page`
   - Klik "Deploy"
   - Tunggu ~2 menit, live di `your-project.vercel.app`

### Cara 2: Via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

## 💻 Development

```bash
npm install
npm run dev -- --webpack
```

Buka http://localhost:3000

## 📁 Project Structure

```
├── app/
│   ├── globals.css    # Neon theme styles
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Landing page
├── data/
│   └── projects.ts    # Project data
└── public/
```

## 🎯 6 Projects

1. HMJ Tekinfo - Himpunan Mahasiswa Jurusan TI
2. Cafe Pojok Rumah - Sistem pemesanan cafe
3. Inventori Santan Ardafa - Inventori UMKM
4. D'four Smart Laundry - Layanan laundry
5. Peminjaman UKS PNP - Platform peminjaman peralatan
6. Kost Putri 99 - Sistem pengaduan kost

---

Made with 💚 by MI2B Class - Politeknik Negeri Padang © 2026
