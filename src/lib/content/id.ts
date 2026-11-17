import type { Content } from './types';

export const id: Content = {
	meta: {
		title: 'Teofilus Charisnanta — Frontend Developer, Photographer, Poster Designer',
		description:
			'Portofolio frontend developer yang juga memotret dan merancang poster. Next.js, React, SvelteKit, Three.js 3D, TypeScript, fotografi, dan visual yang rapi.',
		ogAlt: 'Kartu pratinjau portofolio Teofilus Charisnanta'
	},
	nav: {
		items: [
			{ id: 'karya', label: 'Karya' },
			{ id: 'keahlian', label: 'Keahlian' },
			{ id: 'layanan', label: 'Layanan' },
			{ id: 'tentang', label: 'Tentang' },
			{ id: 'kontak', label: 'Kontak' }
		],
		mainLabel: 'Navigasi utama',
		contactCta: 'Hubungi saya',
		menu: 'Buka menu',
		close: 'Tutup menu',
		theme: 'Ganti tema',
		language: 'Ganti bahasa',
		skip: 'Lewati ke konten'
	},
	hero: {
		availability: 'Terbuka untuk proyek baru — 2026',
		name: 'Teofilus Charisnanta',
		roles: ['Frontend Developer', 'Photographer', 'Poster Designer'],
		intro:
			'Siswa PPLG yang membangun antarmuka web modern, eksplorasi 3D WebGL, memotret, dan merancang poster. Fokus di frontend — dari rancangan di Figma sampai kode yang benar-benar jalan di browser.',
		primaryCta: 'Lihat karya',
		secondaryCta: 'Hubungi saya',
		scrollHint: 'Gulir untuk melihat',
		stats: [
			{ value: '8', label: 'karya terpilih' },
			{ value: '3', label: 'bidang' },
			{ value: '15+', label: 'tool' },
			{ value: '2024', label: 'mulai belajar' }
		]
	},
	marquee: [
		'FRONTEND',
		'PHOTOGRAPHY',
		'POSTER DESIGN',
		'SVELTEKIT',
		'NEXT.JS',
		'REACT',
		'THREE.JS',
		'TYPESCRIPT',
		'TAILWIND',
		'LIGHTROOM',
		'FIGMA'
	],
	sections: {
		work: {
			label: 'Karya',
			title: 'Delapan karya, tiga bidang',
			description:
				'Eksplorasi web interaktif & 3D, foto jalanan & still-life bernuansa hangat, serta rancangan poster berkarakter kuat. Klik kartu untuk melihat proses dan hasilnya.',
			filters: {
				all: 'Semua',
				web: 'Web',
				photo: 'Fotografi',
				poster: 'Poster'
			}
		},
		skills: {
			label: 'Keahlian',
			title: 'Frontend & 3D jadi fokus, sisanya menopang',
			description:
				'Next.js, React, dan SvelteKit dipadukan dengan Three.js untuk pengalaman web interaktif. Desain serta fotografi memastikan hasil akhirnya enak dilihat dan terasa utuh.',
			levelLegend: '1 dasar — 5 lanjut',
			levelLabels: ['Dasar', 'Cukup', 'Menengah', 'Mahir', 'Lanjut']
		},
		services: {
			label: 'Layanan',
			title: 'Yang bisa saya bantu',
			description:
				'Tiga jenis pekerjaan yang paling sering saya ambil, lengkap dengan hasil yang diserahkan di akhir.',
			deliverableLabel: 'Yang kamu dapat'
		},
		process: {
			label: 'Alur kerja',
			title: 'Empat langkah, tanpa kejutan',
			description:
				'Prosesnya sama untuk proyek kecil maupun besar. Kamu selalu tahu sedang di tahap mana.'
		},
		about: {
			label: 'Tentang',
			title: 'Dari poster, lalu jatuh ke kode',
			portraitAlt:
				'Komposisi geometris abstrak berwarna biru, terracotta, dan hijau di atas latar krem',
			bio: [
				'Saya mulai dari desain poster dan fotografi, lalu mendalami kode pemrograman karena ingin hasil desainnya benar-benar hidup dan interaktif di browser. Sekarang frontend jadi fokus utama: Next.js, React, SvelteKit, TypeScript, dan eksplorasi grafika 3D WebGL dengan Three.js.',
				'Di luar kode, saya memotret momen jalanan malam, still-life dengan pencahayaan hangat, dan merancang poster bernuansa techno-organic hingga retro-surrealism. Kombinasi ini membantu saya melihat proyek dari dua sisi — tampilan visual dan cara orang berinteraksi dengannya.'
			],
			facts: [
				{ label: 'FOKUS', value: 'Frontend & 3D WebGL' },
				{ label: 'BIDANG', value: 'Web · Fotografi · Poster' },
				{ label: 'LOKASI', value: 'Indonesia' },
				{ label: 'STATUS', value: 'Terbuka untuk kolaborasi' }
			],
			learningLabel: 'Sedang dipelajari',
			learning: ['Three.js & WebGL 3D', 'Next.js 16 App Router', 'Svelte 5 runes', 'Color grading']
		},
		timeline: {
			label: 'Perjalanan',
			title: 'Empat tahun, satu arah',
			description:
				'Dari desain grafis dan fotografi sampai frontend modern & 3D WebGL — tiap tahap menambah satu lapis keterampilan.'
		},
		contact: {
			label: 'Kontak',
			title: 'Mari membangun sesuatu.',
			description:
				'Punya proyek web, foto, atau poster? Kirim brief singkat — ceritakan tujuan, target waktu, dan hal yang wajib ada.',
			emailLabel: 'Email',
			socialLabel: 'Tempat lain',
			responseNote: 'Balasan biasanya dalam 1–2 hari.',
			form: {
				name: 'Nama',
				namePlaceholder: 'Nama lengkap',
				email: 'Email',
				emailPlaceholder: 'nama@email.com',
				message: 'Pesan',
				messagePlaceholder: 'Ceritakan singkat proyek atau ide kamu…',
				submit: 'Kirim pesan',
				sending: 'Mengirim pesan via Resend…',
				success:
					'Pesan berhasil terkirim via Resend! Terima kasih, saya akan membalasnya secepat mungkin.',
				invalid: 'Form belum lengkap. Periksa kolom yang ditandai.',
				required: 'Wajib diisi',
				invalidEmail: 'Format email belum benar',
				note: 'Pesan dikirim langsung secara instan ke inbox email saya via Resend.'
			}
		}
	},
	skillGroups: [
		{
			id: 'frontend',
			index: '01',
			label: 'Fokus utama',
			title: 'Frontend & 3D Web',
			description: 'Antarmuka yang cepat, responsif, dan interaktif dengan sentuhan grafika 3D WebGL.',
			accent: 'web',
			featured: true,
			skills: [
				{ name: 'HTML', level: 5 },
				{ name: 'CSS', level: 5 },
				{ name: 'JavaScript', level: 4 },
				{ name: 'TypeScript', level: 4 },
				{ name: 'React', level: 4 },
				{ name: 'Next.js', level: 4 },
				{ name: 'SvelteKit', level: 4 },
				{ name: 'Three.js / WebGL', level: 3 },
				{ name: 'Tailwind CSS', level: 5 },
				{ name: 'Responsive design', level: 5 },
				{ name: 'Web animation', level: 4 },
				{ name: 'Accessibility', level: 3 }
			]
		},
		{
			id: 'languages',
			index: '02',
			label: 'Bahasa pemrograman',
			title: 'Logika & data',
			description: 'Bahasa yang dipakai untuk membangun logika, API, dan mengolah data.',
			accent: 'ink',
			skills: [
				{ name: 'TypeScript', level: 4 },
				{ name: 'JavaScript', level: 4 },
				{ name: 'PHP', level: 4 },
				{ name: 'SQL', level: 4 },
				{ name: 'Python', level: 3 },
				{ name: 'Kotlin', level: 3 },
				{ name: 'Dart', level: 3 }
			]
		},
		{
			id: 'design',
			index: '03',
			label: 'Desain & fotografi',
			title: 'Visual & foto',
			description:
				'Menyusun komposisi, mengolah gambar, dan mengarahkan cahaya supaya pesan terbaca kuat.',
			accent: 'photo',
			skills: [
				{ name: 'Figma', level: 5 },
				{ name: 'Photoshop', level: 4 },
				{ name: 'Illustrator', level: 4 },
				{ name: 'Lightroom', level: 3 },
				{ name: 'Color grading', level: 4 },
				{ name: 'Street & Still life', level: 4 },
				{ name: 'Composition', level: 4 },
				{ name: 'Canva', level: 4 }
			]
		},
		{
			id: 'tools',
			index: '04',
			label: 'Tools & alur kerja',
			title: 'Perkakas harian',
			description: 'Yang dipakai dari menulis baris pertama sampai proyek online di produksi.',
			accent: 'ink',
			skills: [
				{ name: 'Git', level: 4 },
				{ name: 'GitHub', level: 4 },
				{ name: 'Vite', level: 4 },
				{ name: 'Bun', level: 3 },
				{ name: 'Vercel', level: 4 },
				{ name: 'VS Code', level: 5 },
				{ name: 'Notion', level: 4 },
				{ name: 'Trello', level: 4 }
			]
		}
	],
	services: [
		{
			id: 'frontend',
			index: '01',
			title: 'Frontend Development & 3D Web',
			description:
				'Landing page modern, aplikasi web interaktif, hingga panggung 3D WebGL. Dari desain Figma sampai deploy dengan performa tinggi.',
			deliverables: [
				'Next.js / SvelteKit + TypeScript',
				'3D WebGL (Three.js & R3F)',
				'Desain responsif & aksesibel',
				'Deploy produksi ke Vercel'
			],
			accent: 'web'
		},
		{
			id: 'photo',
			index: '02',
			title: 'Fotografi Jalanan & Still Life',
			description:
				'Dokumentasi jalanan malam, pendaran lampu, dan still-life berkarakter hangat. Fokus pada komposisi, cahaya, dan suasana bercerita.',
			deliverables: [
				'10–15 foto terkurasi',
				'Format rasio 3:4, 3:2, & 1:1',
				'Color grading atmosferik',
				'Dua kali revisi'
			],
			accent: 'photo'
		},
		{
			id: 'poster',
			index: '03',
			title: 'Poster & Visual Design',
			description:
				'Poster spekulatif fiksi ilmiah, retro-surrealism, maupun promosi acara dengan tipografi berkarakter kuat.',
			deliverables: [
				'File resolusi tinggi siap cetak & unggah',
				'File sumber desain',
				'Eksplorasi tipografi kustom',
				'Dua kali revisi'
			],
			accent: 'poster'
		}
	],
	process: [
		{
			index: '01',
			title: 'Brief',
			description:
				'Ngobrol singkat soal tujuan, target, dan batas waktu. Saya catat hal yang wajib ada dan yang masih bisa ditawar.'
		},
		{
			index: '02',
			title: 'Eksplorasi',
			description:
				'Referensi visual, struktur konten, dan sketsa awal. Kamu melihat arahnya sebelum masuk ke detail.'
		},
		{
			index: '03',
			title: 'Eksekusi',
			description:
				'Pengerjaan di Figma atau kode, dengan progres yang bisa dilihat. Revisi dikumpulkan per putaran agar rapi.'
		},
		{
			index: '04',
			title: 'Serah terima',
			description:
				'File sumber, aset akhir, dan panduan singkat. Untuk web, sekalian deploy dan cek di berbagai ukuran layar.'
		}
	],
	works: [
		{
			slug: 'megantara',
			title: 'Megantara — 3D Culture Exploration',
			category: 'web',
			year: 2026,
			role: 'Frontend & 3D WebGL',
			summary:
				'Platform edukasi budaya Nusantara berbasis Spatial 3D WebGL dengan filosofi awan Batik Mega Mendung.',
			cover: '/images/work/Megantara.png',
			meta: '3D Web platform',
			tools: ['Next.js 16', 'Three.js', 'React Three Fiber', 'Tailwind CSS', 'TypeScript'],
			problem:
				'Instrumen pusaka dan kekayaan budaya Nusantara sering disajikan lewat media dua dimensi yang pasif, membuat generasi muda kurang merasakan detail dan keagungannya.',
			solution:
				'Membangun panggung inspeksi pusaka 3D 360° untuk instrumen seperti Gamelan Ageng dan Angklung, peta kepulauan spasial, 6 sahabat maskot adat, dan mini games interaktif.',
			result:
				'Eksplorasi budaya menjadi interaktif dan hidup langsung di peramban tanpa instalasi tambahan, lengkap dengan material fisik realistis PBR Three.js.',
			highlights: [
				'Inspeksi pusaka 3D 360° interaktif',
				'Peta kepulauan diorama 3D Nusantara',
				'Tema filosofis motif Batik Mega Mendung'
			],
			links: [{ label: 'Repository' }],
			aspectRatio: '16/9'
		},
		{
			slug: 'rangkul-umkm',
			title: 'RangkulUMKM — Pendampingan Digital Mikro',
			category: 'web',
			year: 2026,
			role: 'Frontend & UX Developer',
			summary:
				'Platform local-first yang menghubungkan pelaku warung ultra-mikro dengan mahasiswa untuk digitalisasi dalam satu jam.',
			cover: '/images/work/RangkulUMKM.png',
			meta: 'Web app · Local-first',
			tools: ['React 19', 'Vite', 'TypeScript', 'Tailwind CSS', 'Zustand', 'IndexedDB'],
			problem:
				'Pemilik warung kecil sering kesulitan mendaftar Google Maps atau QRIS sendiri karena langkah administrasi rumit dan keterbatasan waktu.',
			solution:
				'Platform satu jam satu tugas dengan alur resep terpandu, verifikasi bukti foto berstempel waktu, dan penyimpanan lokal-first yang tetap jalan meski sinyal lambat.',
			result:
				'Membantu UMKM go-digital secara nyata tanpa ribet, serta menyediakan paspor dampak dan sertifikat apresiasi terverifikasi untuk relawan.',
			highlights: [
				'Alur tugas terpadu 60 menit per misi',
				'Arsitektur local-first & offline ready',
				'Verifikasi bukti foto & sertifikat digital'
			],
			links: [
				{ label: 'Live Demo', href: 'https://rangkul-umkm.vercel.app' },
				{ label: 'Repository', href: 'https://github.com/T-creator12/RangkulUMKM' }
			],
			aspectRatio: '16/9'
		},
		{
			slug: 'night-ride',
			title: 'Night Ride — Menunggu Lampu Merah',
			category: 'photo',
			year: 2026,
			role: 'Street Photographer',
			summary:
				'Dokumentasi candid pengendara motor saat lampu merah malam hari dengan kontras pencahayaan urban.',
			cover: '/images/work/Night Ride.jpg',
			meta: 'Street photo · 3:4',
			tools: ['Street Photography', 'Lightroom', 'Color Grading'],
			problem:
				'Memotret aktivitas jalanan malam hari sering terbentur pencahayaan minim dan kontras tinggi antar lampu kendaraan.',
			solution:
				'Mengambil sudut pandang dari belakang antrean motor, memanfaatkan pendaran lampu merah sebagai titik fokus dan rim-light alami pada helm dan jaket pengendara.',
			result:
				'Foto bercerita tentang keheningan sesaat di tengah perjalanan pulang warga kota, dengan tonal warna gelap yang sinematik.',
			highlights: [
				'Komposisi candid malam hari',
				'Kontras tajam lampu merah & bayangan',
				'Atmosfer jalanan urban yang sinematik'
			],
			links: [{ label: 'Foto' }],
			aspectRatio: '4/5'
		},
		{
			slug: 'dadu-gabut',
			title: 'Dadu Gabut — Glow in the Groove',
			category: 'photo',
			year: 2026,
			role: 'Still Life Photographer',
			summary:
				'Eksplorasi makro dadu hijau transparan yang berpendar di atas alur kayu meja biliar.',
			cover: '/images/work/Dadu Gabut.jpg',
			meta: 'Still life · Macro',
			tools: ['Macro Photography', 'Lightroom', 'Focus & Lighting'],
			problem:
				'Objek kecil sehari-hari sering tampak biasa jika tidak mendapatkan arah pencahayaan dan sudut bidik yang tepat.',
			solution:
				'Memanfaatkan cahaya dari samping untuk menembus material akrilik hijau cerah, menciptakan bias pendaran hijau menyala di atas tekstur kayu yang hangat.',
			result:
				'Visual makro yang intens dengan kontras warna hijau neon dan cokelat kayu alami serta depth-of-field sempit yang memukau.',
			highlights: [
				'Pendaran cahaya tembus akrilik hijau',
				'Tekstur alur serat kayu alami',
				'Kedalaman bidang (DoF) sempit yang dramatis'
			],
			links: [{ label: 'Foto' }],
			aspectRatio: '4/5'
		},
		{
			slug: 'lentera',
			title: 'Lentera Malam — Akachochin',
			category: 'photo',
			year: 2026,
			role: 'Photographer & Colorist',
			summary:
				'Potret lampion merah kedai sushi malam hari dengan kehangatan cahaya tradisional di tengah gelap.',
			cover: '/images/work/Lentera.jpg',
			meta: 'Street photo · 1:1',
			tools: ['Street Photography', 'Lightroom', 'Atmospheric Tone'],
			problem:
				'Cahaya lentera kertas mudah mengalami overexposed sehingga karakter tulisan kaligrafi dan tekstur kertasnya hilang.',
			solution:
				'Pengaturan eksposur bertumpu pada pendaran merah lampion dan siluet kaligrafi Kanji "Sushi", dipadu refleksi hangat jendela kedai di sisi kiri.',
			result:
				'Komposisi format 1:1 yang hangat, intim, dan membangkitkan nuansa nostalgia kedai jalanan di malam hari.',
			highlights: [
				'Format simetris rasio 1:1',
				'Pendaran hangat lentera kertas merah',
				'Detail kaligrafi Kanji yang tegas'
			],
			links: [{ label: 'Foto' }],
			aspectRatio: '1/1'
		},
		{
			slug: 'patung-dan-bunga',
			title: 'Patung & Bunga — Klasik Bernuansa Hangat',
			category: 'photo',
			year: 2026,
			role: 'Still Life Photographer',
			summary:
				'Komposisi still life buket bunga oranye cerah dan patung ksatria perunggu dengan latar poster antik.',
			cover: '/images/work/Patung dan Bunga.jpg',
			meta: 'Still life · 3:4',
			tools: ['Still Life Photography', 'Lightroom', 'Vintage Grading'],
			problem:
				'Menyatukan banyak elemen visual berbeda (bunga beraneka warna, patung logam gelap, dan pigura dinding) agar tidak terasa berantakan.',
			solution:
				'Menyusun hierarki kedalaman dengan menempatkan flora hangat di latar depan dan patung ksatria di bidang tengah dengan pencahayaan warm vintage.',
			result:
				'Nuansa elegan klasik ala galeri Eropa yang hangat, tenang, dan kaya akan tekstur material.',
			highlights: [
				'Lapisan kedalaman foreground & background',
				'Pencahayaan hangat bernuansa vintage',
				'Harmonisasi tekstur flora & logam'
			],
			links: [{ label: 'Foto' }],
			aspectRatio: '4/5'
		},
		{
			slug: 'botanical-diagnostics',
			title: 'Botanical Diagnostics — Specimen Bio-094-X',
			category: 'poster',
			year: 2026,
			role: 'Graphic Designer & Visual Artist',
			summary:
				'Poster ilmiah spekulatif fiksi ilmiah bertema bio-futuristik dengan spesimen flora sibernetik transparan.',
			cover: '/images/work/Botanical diagnostics exhibition poster.png',
			meta: 'Poster · Techno-organic',
			tools: ['Photoshop', 'Illustrator', 'Brutalist Typography', 'Acid Graphics'],
			problem:
				'Menggabungkan bentuk organik tanaman yang anggun dengan elemen antarmuka futuristik bergaris keras tanpa saling menenggelamkan.',
			solution:
				'Spesimen anggrek cybernetic transparan ditempatkan dalam slab kaca analitik, dikelilingi blok metadata teknis, retikel bidik, dan tipografi judul brutalist tebal.',
			result:
				'Poster pameran berkonsep techno-organic yang sangat detail, memikat mata, dan sarat akan narasi fiksi ilmiah spekulatif.',
			highlights: [
				'Visual anggrek transparan bio-mekanik',
				'Tipografi brutalist tebal & blok metadata',
				'Elemen grafis vektor retikel & barcode'
			],
			links: [{ label: 'Poster' }],
			aspectRatio: '4/5'
		},
		{
			slug: 'solar-solitude',
			title: 'Solar Solitude — Volume IV (1974)',
			category: 'poster',
			year: 2026,
			role: 'Graphic Designer & Visual Artist',
			summary:
				'Poster seni retro-surrealism fiksi ilmiah 70-an menampilkan monolit gerbang batu di padang pasir kosmis.',
			cover: '/images/work/Solar Solitude.png',
			meta: 'Poster · Retro Sci-Fi',
			tools: ['Photoshop', 'Illustrator', 'Retro Typography', 'Texture Grading'],
			problem:
				'Membangun kesan kemegahan kuno sekaligus misteri masa depan dengan palet warna dan tekstur cetak khas tahun 1970-an.',
			solution:
				'Menyusun komposisi monolit portal batu besar di tengah lautan pasir senja di bawah matahari bola api kosmis raksasa, dibingkai ornamen garis tipis Art Deco.',
			result:
				'Poster atmosferik yang mengingatkan pada sampul novel fiksi ilmiah klasik dengan nuansa terakota hangat dan kesunyian kosmis.',
			highlights: [
				'Estetika fiksi ilmiah retro 1970-an',
				'Komposisi monolit arsitektur & pasir kosmis',
				'Tipografi Art Deco berbingkai klasik'
			],
			links: [{ label: 'Poster' }],
			aspectRatio: '4/5'
		}
	],
	experience: [
		{
			year: '2026',
			title: 'Frontend & 3D Web Developer',
			org: 'Proyek lepas & kompetisi',
			description:
				'Membangun platform edukasi 3D WebGL Megantara, aplikasi pendampingan UMKM RangkulUMKM, serta portofolio modern dengan SvelteKit dan Next.js.'
		},
		{
			year: '2025',
			title: 'Divisi Media & Visual Design',
			org: 'Komunitas gereja/sekolah ',
			description:
				'Dokumentasi foto kegiatan sekolah, eksplorasi fotografi jalanan malam & still life, serta merancang poster pameran dan materi visual.'
		},
		{
			year: '2024',
			title: 'Mulai mendalami pemrograman web',
			org: 'Jurusan PPLG',
			description:
				'Belajar HTML, CSS, JavaScript, React, dan TypeScript. Mulai menghubungkan konsep desain antarmuka dengan implementasi kode frontend.'
		},
		{
			year: '2023',
			title: 'Eksplorasi desain grafis & fotografi',
			org: 'Belajar mandiri',
			description:
				'Merancang poster, feed, dan eksplorasi kamera. Dari sini mulai terbiasa menyusun hierarki tipografi, komposisi visual, dan pengolahan warna.'
		}
	],
	contact: {
		email: 'teofiluscharis@gmail.com',
		socials: [
			{ label: 'GitHub', handle: '@T-creator12', href: 'https://github.com/T-creator12' },
			{ label: 'Instagram', handle: '@teo_aja_dah', href: 'https://www.instagram.com/teo_aja_dah/' }
		]
	},
	footer: {
		cta: 'Mari membangun sesuatu.',
		note: 'Koleksi karya frontend & 3D WebGL, fotografi jalanan & still-life, serta eksplorasi desain grafis.',
		backToTop: 'Kembali ke atas',
		builtWith: 'SvelteKit · TypeScript · Tailwind CSS'
	},
	ui: {
		viewDetail: 'Lihat detail',
		close: 'Tutup',
		next: 'Berikutnya',
		previous: 'Sebelumnya',
		problem: 'Masalah',
		solution: 'Solusi',
		result: 'Hasil',
		role: 'Peran',
		tools: 'Tools',
		year: 'Tahun',
		highlights: 'Poin utama',
		comingSoon: 'Segera',
		imageUnavailable: 'Gambar belum tersedia',
		menu: 'Menu',
		categoryLabels: {
			web: 'Web',
			photo: 'Fotografi',
			poster: 'Poster'
		}
	}
};
