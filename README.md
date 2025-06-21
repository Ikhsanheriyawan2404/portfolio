# ✨ Personal Portfolio
## 🚀 Fitur Utama

- Menampilkan informasi profil, bio, dan peran.
- Daftar proyek dengan teknologi yang digunakan dan gambar.
- Animasi interaktif menggunakan Framer Motion.
- Desain responsif dan minimalis menggunakan TailwindCSS.

---

## 📁 Struktur Proyek

```
.
├── public/
│   ├── data/
│   │   └── profile.json      # Data pribadi
│   │   └── projects.json     # Daftar proyek
│   └── images/               # Gambar-gambar proyek
│       └── project1.png
│       └── project2.png
│       └── ...
├── src/
│   └── components/
│   └── ...
├── tailwind.config.js
├── vite.config.ts
└── ...

````

---

## ⚙️ Instalasi & Penggunaan

### 1. Clone Repository

```bash
git clone https://github.com/ikhsanheriyawan2404/portfolio.git
cd portfolio
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Jalankan Aplikasi

```bash
npm run dev
```

Buka di browser: [http://localhost:5173](http://localhost:5173)

---

## 🛠️ Konfigurasi Data Static

### 🔹 Data Profil

File: `public/data/profile.json`

Contoh isi:

```json
{
  "first_name": "Ikhsan",
  "last_name": "Heriyawan",
  "role": "Backend Engineer",
  "bio": "Backend engineer yang fokus pada arsitektur skalabel, performa, dan integrasi AI...",
  "email": "ikhsanheriyawan2404@gmail.com",
  "github": "ikhsanheriyawan2404",
  "profile_photo": "/profile.jpg"
}
```

### 🔹 Data Proyek

File: `public/data/projects.json`

Contoh isi:

```json
[
  {
    "name": "Duite Bot",
    "description": "Bot Telegram & WhatsApp terintegrasi AI LLM...",
    "techStack": ["Golang", "Node.js", "Telegram API", "React.js"],
    "image": "images/duitebot.png",
    "github": null
  },
  {
    "name": "Wedding Planner & Guestbook",
    "description": "Aplikasi untuk calon pengantin mengelola anggaran...",
    "techStack": ["Laravel", "Inertia", "React.js"],
    "image": "images/wedding.png",
    "github": null
  }
]
```

### 🔹 Gambar

Letakkan semua gambar proyek di folder: `public/images/`

Pastikan nama file pada `projects.json` sesuai dengan file di folder ini.

---

## 🧪 Build untuk Production menggunakan docker

```bash
docker compose up -d 
```
---

## 📦 Teknologi yang Digunakan

* **React 19**
* **Tailwind CSS**
* **Framer Motion (motion)**
* **TypeScript**
* **Vite**
* **Lucide Icons**

---

## 📫 Kontak

📧 Email: [ikhsanheriyawan2404@gmail.com](mailto:ikhsanheriyawan2404@gmail.com)
🔗 GitHub: [github.com/ikhsanheriyawan2404](https://github.com/ikhsanheriyawan2404)

---