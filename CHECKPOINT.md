# Catatan Implementasi — Portofolio 2026

Dokumen ini menggantikan catatan checkpoint workshop. Isinya menjelaskan **apa
yang sudah jadi, kenapa diputuskan begitu, dan cara melanjutkannya**.

## Ringkasan

Satu halaman portofolio untuk tiga bidang: frontend (fokus utama), fotografi,
dan desain poster. Identitas sudah diisi (Teofilus Charisnanta); karya masih
contoh.

Stack: SvelteKit 3.2 · Svelte 5.57 (runes) · TypeScript · Tailwind CSS v4.
Tidak ada dependency runtime tambahan selain font.

## Yang berubah dari versi workshop

| Sebelum                                        | Sekarang                                                 |
| ---------------------------------------------- | -------------------------------------------------------- |
| Data di `src/lib/data.ts`                      | `src/lib/content/{types,id,en}.ts` dengan tipe bersama   |
| Satu bahasa (Indonesia hard-coded)             | ID + EN, persistensi `localStorage`, dukungan `?lang=`   |
| Tema hanya lewat state di `+page.svelte`       | Store tema + inline script anti-kedip di `app.html`      |
| Proyek tampil sebagai baris                    | Grid masonry + filter kategori + modal detail `<dialog>` |
| Form mengirim lewat Resend (`+page.server.ts`) | Form membuka `mailto:` + honeypot, tanpa server          |
| `src/env.ts` + `.env.example`                  | Dihapus — tidak ada variabel environment yang dipakai    |
| Gambar `.png` bawaan template                  | Cover SVG buatan sendiri + OG card PNG                   |

Alasan form dibuat `mailto:`: halaman ini bisa di-deploy ke hosting statis mana
pun tanpa API key, dan tidak ada data pengunjung yang dikirim ke server pihak
ketiga. Konsekuensinya, pengunjung harus menekan "kirim" di aplikasi email
mereka sendiri.

## Struktur state

Tiga hal yang perlu diingat saat mengubah kode:

1. **`src/lib/i18n.svelte.ts`** — objek tunggal dengan `content` (derived dari
   `locale`), `locale`, `init()`, `set()`, `toggle()`. Kunci penyimpanan:
   `oots-locale`. Semua komponen membaca `i18n.content`, tidak pernah mengimpor
   `id.ts`/`en.ts` langsung.
2. **`src/lib/stores/theme.svelte.ts`** — `isDark`, `init()`, `toggle()`. Kunci:
   `oots-theme`. Kelas `dark` dipasang di `<html>`, karena semua varian gelap di
   `layout.css` memakai selector `.dark`.
3. **`src/lib/actions/reveal.ts`** — `use:reveal` menambah `is-visible` saat
   elemen masuk viewport. Animasi hanya aktif jika `<html class="js">`; kalau
   JavaScript mati, konten tetap terlihat.

## Palet

Token di `src/routes/layout.css`:

| Token             | Fungsi                             |
| ----------------- | ---------------------------------- |
| `--accent-web`    | biru — karya dan label web         |
| `--accent-photo`  | terracotta — fotografi             |
| `--accent-poster` | hijau gelap — poster               |
| `--color-primary` | warna aksi (tombol, fokus, tautan) |

Kelas turunan (`text-accent-web`, `bg-accent-photo`, `text-success`,
`text-danger`, dst.) dibuat lewat `@theme inline`. Menambah accent baru berarti
menambah token di kedua blok (terang dan `.dark`) lalu mendaftarkannya di
`@theme inline`.

## Karya dan aset

Sembilan karya: 4 web, 3 foto, 2 poster. Rasio cover mengikuti kategori:

- web → `3/2`
- photo → `3/2`
- poster → `4/5`

Di modal, poster memakai `4/5`, foto `3/2`, dan web `16/9` supaya detail nyaman
dibaca. `MediaFrame` menampilkan gradien + label sebagai fallback kalau gambar
gagal dimuat, jadi layout tidak pernah rusak. Subjek foto orang sengaja
memakai siluet dari belakang tanpa wajah yang dikenali.

Gambar dibuat lewat `scripts/generate-placeholders.mjs`. Generator AI gambar
tidak tersedia saat pengerjaan (kredensial provider ditolak), jadi semua cover
berupa SVG geometris dengan palet yang sama. Semua file bisa diganti gambar
asli tanpa mengubah kode — lihat [`ASSETS.md`](./ASSETS.md).

## Form kontak

Alur di `Contact.svelte`:

1. Validasi nama, email (regex sederhana), dan pesan di klien.
2. Cek honeypot (`website`) — kalau terisi, berhenti tanpa pesan error.
3. Susun `mailto:` berisi subjek dan body, lalu set `window.location.href`.
4. Tampilkan status "Membuka email…" lalu pesan sukses.

Tidak ada request jaringan. Kalau nanti ingin pengiriman sungguhan, tambahkan
endpoint (`src/routes/api/contact/+server.ts`) atau form action, lalu ganti
bagian `window.location.href` dengan `fetch`.

## SEO

`+page.svelte` memuat title, description, Open Graph, dan Twitter Card.
`og:image` menunjuk ke `/images/og-cover.png` (1200×630) karena sebagian besar
platform tidak merender SVG untuk pratinjau. `app.html` mengatur `lang`
default; i18n memperbarui `document.documentElement.lang` saat bahasa berganti.

JSON-LD `Person` sempat ditambahkan lalu dicabut: menyuntikkannya lewat
`{@html}` memicu peringatan XSS dari autofixer, dan manfaatnya kecil untuk
halaman satu ini. Kalau dibutuhkan lagi, lebih aman memasukkannya sebagai
`<script type="application/ld+json">` statis di `app.html`.

## Verifikasi

```sh
bun run check    # 0 error, 0 warning
bun run build    # build produksi
bun run dev      # cek manual: tema, bahasa, filter, modal, form
```

Checklist manual yang disarankan setelah mengubah UI:

- [ ] Muat ulang dalam mode gelap: tidak ada kedipan putih.
- [ ] Ganti bahasa, muat ulang: pilihan bertahan.
- [ ] Buka `/?lang=en`: langsung bahasa Inggris.
- [ ] Filter karya, buka modal, tekan Esc, klik backdrop.
- [ ] Tab dari awal halaman: skip link muncul lebih dulu.
- [ ] Kecilkan lebar ke 360px: tidak ada scroll horizontal.
- [ ] Aktifkan "reduce motion": tidak ada animasi masuk.

## Sisa pekerjaan yang wajar

- Ganti seluruh konten contoh dengan data asli.
- Ganti cover SVG dengan tangkapan layar/foto/poster asli.
- Isi `href` pada tautan sosial.
- Tambahkan `sitemap.xml` dan `robots.txt` final (saat ini `robots.txt` masih
  bawaan template).
- Pasang adapter deploy yang sesuai di `vite.config.ts`.
