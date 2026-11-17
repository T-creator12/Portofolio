# Portofolio 2026 — Satu Halaman, Tiga Bidang

Portofolio pribadi satu halaman untuk **frontend developer** yang juga mengerjakan
**fotografi** dan **desain poster**. Dibangun dengan SvelteKit 3, Svelte 5
(runes), TypeScript, dan Tailwind CSS v4.

Halaman ini sudah memakai identitas asli (Teofilus Charisnanta). Karya dan gambar
di dalamnya masih contoh dan perlu diganti sebelum dipublikasikan — lihat
[Mengganti isi](#mengganti-isi).

## Isi halaman

Satu rute (`/`), semua section di dalamnya:

| Section    | Isi                                                             |
| ---------- | --------------------------------------------------------------- |
| Hero       | Nama, peran yang berputar, ringkasan, statistik singkat         |
| Marquee    | Pita berjalan berisi bidang dan tool                            |
| Karya      | 9 karya dengan filter Semua/Web/Fotografi/Poster + modal detail |
| Keahlian   | 4 grup: frontend, bahasa pemrograman, desain & foto, tools      |
| Layanan    | 3 layanan beserta hasil yang diserahkan                         |
| Alur kerja | 4 langkah proses                                                |
| Tentang    | Bio, fakta singkat, yang sedang dipelajari, timeline perjalanan |
| Kontak     | Email, sosial, form yang membuka aplikasi email                 |
| Footer     | CTA, tautan sosial, kembali ke atas                             |

Fitur lintas halaman:

- **Bahasa ID/EN** — kamus lengkap di `src/lib/content/`, pilihan disimpan di
  `localStorage` dan bisa dipaksa lewat `?lang=en`.
- **Tema terang/gelap** — mengikuti preferensi sistem, bisa diganti manual,
  tanpa kedipan saat muat (inline script di `src/app.html`).
- **Modal detail karya** — memakai `<dialog>` native, jadi Esc, focus trap, dan
  scroll lock bekerja tanpa library tambahan.
- **Animasi reveal** — IntersectionObserver + CSS; otomatis nonaktif saat
  `prefers-reduced-motion: reduce`.
- **Tanpa dependency baru** — ikon berupa SVG inline, animasi murni CSS.

## Menjalankan

Butuh [bun](https://bun.sh) 1.4+.

```sh
bun install
bun run dev      # http://localhost:5173
bun run check    # TypeScript + Svelte, harus 0 error
bun run build    # build produksi
bun run preview  # cek hasil build
bun run lint     # prettier + eslint
bun run format   # rapikan format
```

## Struktur file

```text
src/
  app.html                     # inline script anti-kedip tema & bahasa
  routes/
    +layout.svelte             # init tema/i18n, favicon, theme-color
    +page.svelte               # susunan section + meta SEO/OG
    layout.css                  # token warna, animasi, utilitas
  lib/
    content/
      types.ts                 # kontrak isi (dipakai id.ts & en.ts)
      id.ts                    # konten bahasa Indonesia
      en.ts                    # konten bahasa Inggris
    i18n.svelte.ts             # state bahasa + persistensi
    stores/theme.svelte.ts     # state tema + persistensi
    actions/reveal.ts          # action use:reveal
    components/
      Nav.svelte               # navigasi desktop + drawer mobile
      Hero.svelte  WorkSection.svelte  WorkCard.svelte
      Skills.svelte  Services.svelte  About.svelte
      Contact.svelte  Footer.svelte  RoleRotator.svelte
      ThemeToggle.svelte  LanguageToggle.svelte
      ui/                      # Icon, Modal, MediaFrame, Marquee,
                                # SectionHeader, ScrollProgress
scripts/
  generate-placeholders.mjs    # membuat ulang semua cover SVG
static/
  images/                      # cover karya, portrait abstrak, OG card
```

## Mengganti isi

Semua teks ada di dua file: `src/lib/content/id.ts` dan `src/lib/content/en.ts`.
Keduanya memakai tipe yang sama dari `types.ts`, jadi kalau satu bahasa
ketinggalan field-nya, `bun run check` akan menolak.

1. **Identitas** — `meta`, `hero`, `contact`, `footer` di kedua file. Nama dan
   email sudah terisi; sesuaikan handle sosial dan detail lain bila perlu.
2. **Karya** — array `works`. Setiap karya punya `slug`, `title`, `category`
   (`web` | `photo` | `poster`), `year`, `role`, `summary`, `cover`, `tools`,
   `problem`, `solution`, `result`, dan `highlights`. `category` boleh `web`,
   `photo`, atau `poster`. Menambah karya cukup menambah satu objek; filter dan
   grid menyesuaikan sendiri. Foto orang memakai siluet dari belakang — hindari
   wajah yang dikenali.
3. **Keahlian, layanan, proses, timeline** — array di file yang sama. Level
   keahlian 1–5 dan dipetakan ke label di `sections.skills.levelLabels`.
4. **Tautan sosial** — isi `href` pada `contact.socials`. Selama `href` kosong,
   tautan tampil sebagai "Segera" / "Coming soon".
5. **Gambar** — lihat [`ASSETS.md`](./ASSETS.md).

Setelah mengubah, jalankan `bun run check` lalu `bun run build`.

## Catatan teknis

- SvelteKit 3 memakai `$app/env` (bukan `$app/environment`) dan mendaftarkan
  variabel environment lewat `$app/env/public` atau `$app/env/private`. Proyek
  ini tidak memakai variabel environment sama sekali, jadi tidak ada file `.env`
  yang dibutuhkan.
- Form kontak memakai `mailto:` — tidak ada data yang dikirim ke server. Ini
  disengaja agar tetap berjalan di hosting statis tanpa API key. Kalau butuh
  pengiriman sungguhan, tambahkan endpoint atau server action sendiri.
- Animasi hanya jalan kalau `<html>` punya class `js`; class itu dipasang oleh
  inline script di `app.html`. Tanpa JavaScript, halaman tetap terbaca penuh.
- Semua warna diambil dari token di `src/routes/layout.css`:
  biru (web), terracotta (fotografi), hijau gelap (poster).
- `bun run build` memakai `@sveltejs/adapter-auto`. Tanpa platform yang
  terdeteksi, adapter hanya memberi peringatan dan build tetap selesai. Untuk
  deploy, pasang adapter target (misalnya `@sveltejs/adapter-vercel` atau
  `@sveltejs/adapter-static`) lalu daftarkan di `vite.config.ts`.
