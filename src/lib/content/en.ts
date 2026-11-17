import type { Content } from './types';

export const en: Content = {
	meta: {
		title: 'Teofilus Charisnanta — Frontend Developer, Photographer, Poster Designer',
		description:
			'Portfolio of a frontend developer who also shoots photos and designs posters. Next.js, React, SvelteKit, Three.js 3D, TypeScript, photography, and clean visuals.',
		ogAlt: 'Portfolio preview card for Teofilus Charisnanta'
	},
	nav: {
		items: [
			{ id: 'karya', label: 'Work' },
			{ id: 'keahlian', label: 'Skills' },
			{ id: 'layanan', label: 'Services' },
			{ id: 'tentang', label: 'About' },
			{ id: 'kontak', label: 'Contact' }
		],
		mainLabel: 'Main navigation',
		contactCta: 'Get in touch',
		menu: 'Open menu',
		close: 'Close menu',
		theme: 'Switch theme',
		language: 'Switch language',
		skip: 'Skip to content'
	},
	hero: {
		availability: 'Open for new projects — 2026',
		name: 'Teofilus Charisnanta',
		roles: ['Frontend Developer', 'Photographer', 'Poster Designer'],
		intro:
			'A software engineering student who crafts modern web interfaces, 3D WebGL experiences, captures street stories, and designs speculative posters. Frontend is the focus — from Figma drafts to code that actually runs in the browser.',
		primaryCta: 'See the work',
		secondaryCta: 'Get in touch',
		scrollHint: 'Scroll to explore',
		stats: [
			{ value: '8', label: 'selected works' },
			{ value: '3', label: 'disciplines' },
			{ value: '15+', label: 'tools' },
			{ value: '2024', label: 'started learning' }
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
			label: 'Work',
			title: 'Eight projects, three disciplines',
			description:
				'Interactive web & 3D experiences, atmospheric street & still-life photography, and high-impact poster designs. Click any card to explore the process and outcomes.',
			filters: {
				all: 'All',
				web: 'Web',
				photo: 'Photography',
				poster: 'Poster'
			}
		},
		skills: {
			label: 'Skills',
			title: 'Frontend & 3D take center stage, the rest grounds it',
			description:
				'Next.js, React, and SvelteKit paired with Three.js for interactive web experiences. Design and photography ensure every craft feels cohesive and intentional.',
			levelLegend: '1 starter — 5 advanced',
			levelLabels: ['Starter', 'Basic', 'Intermediate', 'Advanced', 'Confident']
		},
		services: {
			label: 'Services',
			title: 'What I can help with',
			description:
				'Three kinds of work I take on most often, including exactly what gets handed over at the end.',
			deliverableLabel: 'What you get'
		},
		process: {
			label: 'Process',
			title: 'Four steps, no surprises',
			description:
				'The process stays the same for small and large projects. You always know which stage we are in.'
		},
		about: {
			label: 'About',
			title: 'Started with posters, fell into code',
			portraitAlt:
				'Abstract geometric composition in blue, terracotta, and green on a cream background',
			bio: [
				'I started with poster design and photography, then delved into programming to bring visual ideas to life with interactive browser experiences. My primary focus is frontend: Next.js, React, SvelteKit, TypeScript, and 3D WebGL exploration with Three.js.',
				'Beyond code, I capture candid night streets, still-life moments under warm ambient light, and craft posters spanning techno-organic specimens to retro-surrealism. Merging engineering with artistic sensibility gives me a rounded approach to digital crafting.'
			],
			facts: [
				{ label: 'FOCUS', value: 'Frontend & 3D WebGL' },
				{ label: 'FIELDS', value: 'Web · Photography · Poster' },
				{ label: 'LOCATION', value: 'Indonesia' },
				{ label: 'STATUS', value: 'Open for collaboration' }
			],
			learningLabel: 'Currently exploring',
			learning: ['Three.js & WebGL 3D', 'Next.js 16 App Router', 'Svelte 5 runes', 'Color grading']
		},
		timeline: {
			label: 'Timeline',
			title: 'Four years, one trajectory',
			description:
				'From graphic design and photography to modern frontend & 3D WebGL — every step added a new layer of craftsmanship.'
		},
		contact: {
			label: 'Contact',
			title: "Let's build something.",
			description:
				'Have a web, photo, or poster project? Send a brief — what you want to achieve, your timeline, and non-negotiables.',
			emailLabel: 'Email',
			socialLabel: 'Elsewhere',
			responseNote: 'Replies usually within 1–2 days.',
			form: {
				name: 'Name',
				namePlaceholder: 'Full name',
				email: 'Email',
				emailPlaceholder: 'name@email.com',
				message: 'Message',
				messagePlaceholder: 'Tell me briefly about your project or idea…',
				submit: 'Send message',
				sending: 'Sending via Resend…',
				success:
					'Message sent successfully via Resend! Thank you, I will get back to you shortly.',
				invalid: 'Form incomplete. Check highlighted fields.',
				required: 'Required',
				invalidEmail: 'Invalid email address',
				note: 'This form sends your message directly to my inbox via Resend.'
			}
		}
	},
	skillGroups: [
		{
			id: 'frontend',
			index: '01',
			label: 'Primary focus',
			title: 'Frontend & 3D Web',
			description: 'Fast, responsive, and interactive interfaces infused with spatial 3D WebGL graphics.',
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
			label: 'Programming languages',
			title: 'Logic & data',
			description: 'Languages used to build business logic, APIs, and process data structures.',
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
			label: 'Design & photography',
			title: 'Visual & optics',
			description:
				'Composing layouts, grading images, and directing lighting so messages resonate.',
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
			label: 'Tools & workflow',
			title: 'Daily toolkit',
			description: 'Everything used from writing the first line of code to production deployment.',
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
				'Modern landing pages, interactive web applications, and 3D WebGL scenes. From Figma to high-performance production code.',
			deliverables: [
				'Next.js / SvelteKit + TypeScript',
				'3D WebGL (Three.js & R3F)',
				'Responsive & accessible design',
				'Production deploy to Vercel'
			],
			accent: 'web'
		},
		{
			id: 'photo',
			index: '02',
			title: 'Street & Still Life Photography',
			description:
				'Candid nocturnal street documentation, light play, and warm still-life studies. Focused on mood and narrative framing.',
			deliverables: [
				'10–15 curated photographs',
				'3:4, 3:2, & 1:1 aspect ratios',
				'Atmospheric color grading',
				'Two rounds of revisions'
			],
			accent: 'photo'
		},
		{
			id: 'poster',
			index: '03',
			title: 'Poster & Visual Design',
			description:
				'Speculative sci-fi, retro-surrealism, and event posters boasting assertive typography and deep visual narratives.',
			deliverables: [
				'High-res print & web assets',
				'Original design source files',
				'Custom typography exploration',
				'Two rounds of revisions'
			],
			accent: 'poster'
		}
	],
	process: [
		{
			index: '01',
			title: 'Brief',
			description:
				'A quick discussion on goals, audience, and deadlines. I note down what is essential and where we have room to explore.'
		},
		{
			index: '02',
			title: 'Exploration',
			description:
				'Visual references, content layout, and early drafts. You see the direction before we commit to the finer details.'
		},
		{
			index: '03',
			title: 'Execution',
			description:
				'Building in Figma or code with visible milestones along the way. Revisions are batched per cycle to keep momentum.'
		},
		{
			index: '04',
			title: 'Handover',
			description:
				'Source files, final assets, and concise documentation. For web projects, this includes production deployment and cross-device testing.'
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
				'A cultural education platform powered by Spatial 3D WebGL featuring Cirebon Mega Mendung cloud motifs.',
			cover: '/images/work/Megantara.png',
			meta: '3D Web platform',
			tools: ['Next.js 16', 'Three.js', 'React Three Fiber', 'Tailwind CSS', 'TypeScript'],
			problem:
				'Heritage artifacts and traditional instruments are often presented through static 2D media, missing the immersive detail and grandeur that resonates with younger audiences.',
			solution:
				'Built a real-time 360° 3D inspection stage for heritage instruments, a spatial island diorama map, 6 cultural mascot guides, and interactive regional mini-games.',
			result:
				'Cultural learning becomes vibrant and interactive right inside the browser, powered by realistic Three.js PBR materials and smooth camera transitions.',
			highlights: [
				'Interactive 360° 3D artifact inspection',
				'Spatial archipelago 3D diorama map',
				'Philosophical Batik Mega Mendung theme'
			],
			links: [{ label: 'Repository' }],
			aspectRatio: '16/9'
		},
		{
			slug: 'rangkul-umkm',
			title: 'RangkulUMKM — Micro Digital Mentorship',
			category: 'web',
			year: 2026,
			role: 'Frontend & UX Developer',
			summary:
				'A local-first platform connecting ultra-micro merchants with nearby students to complete digital tasks in one hour.',
			cover: '/images/work/RangkulUMKM.png',
			meta: 'Web app · Local-first',
			tools: ['React 19', 'Vite', 'TypeScript', 'Tailwind CSS', 'Zustand', 'IndexedDB'],
			problem:
				'Small neighborhood merchants struggle with setting up Google Maps or QRIS payments on their own due to confusing guides and tight operating hours.',
			solution:
				'A one-hour one-task guided recipe system with timestamped evidence verification and offline-friendly local-first architecture.',
			result:
				'Successfully bridges digital gaps for grassroots merchants while offering verified digital impact passports and certificates for student volunteers.',
			highlights: [
				'Guided 60-minute single-task roadmap',
				'Local-first & offline-resilient architecture',
				'Photo evidence verification & certificates'
			],
			links: [
				{ label: 'Live Demo', href: 'https://rangkul-umkm.vercel.app' },
				{ label: 'Repository', href: 'https://github.com/T-creator12/RangkulUMKM' }
			],
			aspectRatio: '16/9'
		},
		{
			slug: 'night-ride',
			title: 'Night Ride — Waiting for Green',
			category: 'photo',
			year: 2026,
			role: 'Street Photographer',
			summary:
				'A candid documentary capture of commuters halted at a late-night red light amid urban lighting.',
			cover: '/images/work/Night Ride.jpg',
			meta: 'Street photo · 3:4',
			tools: ['Street Photography', 'Lightroom', 'Color Grading'],
			problem:
				'Shooting night street scenes is challenging due to harsh exposure gaps between vehicle headlamps and deep shadows.',
			solution:
				'Framed from behind the queuing motorbikes, leveraging the red stop light as a striking focal point and natural rim lighting on helmets and jackets.',
			result:
				'Evokes the quiet introspection of city commuters returning home, wrapped in moody, cinematic night tones.',
			highlights: [
				'Candid night-time perspective',
				'Vivid contrast between red light & shadows',
				'Cinematic urban street mood'
			],
			links: [{ label: 'Photo' }],
			aspectRatio: '4/5'
		},
		{
			slug: 'dadu-gabut',
			title: 'Dadu Gabut — Glow in the Groove',
			category: 'photo',
			year: 2026,
			role: 'Still Life Photographer',
			summary:
				'Macro exploration of a glowing translucent green die resting in a weathered wood groove.',
			cover: '/images/work/Dadu Gabut.jpg',
			meta: 'Still life · Macro',
			tools: ['Macro Photography', 'Lightroom', 'Focus & Lighting'],
			problem:
				'Ordinary everyday items easily feel mundane without deliberate directional lighting and a compelling perspective.',
			solution:
				'Used side backlighting to refract through bright green acrylic, casting an ethereal neon glow over warm, textured wood grains.',
			result:
				'A striking macro study balancing radiant neon chartreuse against earthy timber grain with a dramatic shallow depth of field.',
			highlights: [
				'Glowing internal refraction in acrylic',
				'Tactile wood grain definition',
				'Dramatic shallow depth of field'
			],
			links: [{ label: 'Photo' }],
			aspectRatio: '4/5'
		},
		{
			slug: 'lentera',
			title: 'Lentera Malam — Akachochin',
			category: 'photo',
			year: 2026,
			role: 'Photographer & Colorist',
			summary:
				'A moody portrait of a glowing traditional red sushi lantern suspended into the night.',
			cover: '/images/work/Lentera.jpg',
			meta: 'Street photo · 1:1',
			tools: ['Street Photography', 'Lightroom', 'Atmospheric Tone'],
			problem:
				'Internal illumination in paper lanterns easily blows out highlights, losing calligraphy details and paper texture.',
			solution:
				'Exposed specifically for the warm crimson glow and bold Kanji calligraphy, complemented by ambient amber spill from the neighboring shopfront.',
			result:
				'An intimate 1:1 square composition evoking the warm hospitality and nostalgic charm of night-time street eateries.',
			highlights: [
				'Symmetrical 1:1 square framing',
				'Warm paper lantern translucence',
				'Crisp Kanji calligraphy silhouette'
			],
			links: [{ label: 'Photo' }],
			aspectRatio: '1/1'
		},
		{
			slug: 'patung-dan-bunga',
			title: 'Patung & Bunga — Classical Warmth',
			category: 'photo',
			year: 2026,
			role: 'Still Life Photographer',
			summary:
				'Still life composition juxtaposing vibrant floral arrangements with a bronze knight statuette.',
			cover: '/images/work/Patung dan Bunga.jpg',
			meta: 'Still life · 3:4',
			tools: ['Still Life Photography', 'Lightroom', 'Vintage Grading'],
			problem:
				'Harmonizing disparate visual elements—vibrant blossoms, dark metallic sculptures, and wall frames—without visual clutter.',
			solution:
				'Structured a layered depth with warm florals in the foreground leading the eye to the bronze knight bathed in golden vintage illumination.',
			result:
				'An elegant, European parlor-style atmosphere filled with rich textures, golden tones, and timeless charm.',
			highlights: [
				'Layered depth between flowers & statue',
				'Warm ambient vintage grading',
				'Texture harmony across flora & metal'
			],
			links: [{ label: 'Photo' }],
			aspectRatio: '4/5'
		},
		{
			slug: 'botanical-diagnostics',
			title: 'Botanical Diagnostics — Specimen Bio-094-X',
			category: 'poster',
			year: 2026,
			role: 'Graphic Designer & Visual Artist',
			summary:
				'A speculative sci-fi bio-futuristic poster presenting a cybernetic orchid preserved in diagnostic casing.',
			cover: '/images/work/Botanical diagnostics exhibition poster.png',
			meta: 'Poster · Techno-organic',
			tools: ['Photoshop', 'Illustrator', 'Brutalist Typography', 'Acid Graphics'],
			problem:
				'Fusing graceful biological forms with sharp, clinical laboratory data interfaces without clashing aesthetics.',
			solution:
				'Encased a luminous translucent cybernetic orchid within a diagnostic chamber, flanked by technical metadata blocks, crosshairs, and heavy brutalist typography.',
			result:
				'An intricate techno-organic exhibition poster rich in visual narrative, high-precision typography, and sci-fi aesthetic.',
			highlights: [
				'Bio-mechanical translucent orchid render',
				'Heavy brutalist display typography & metadata',
				'Precision technical vector reticles & barcodes'
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
				'A 1970s retro-surrealist sci-fi poster showcasing a monumental stone arch across barren cosmic dunes.',
			cover: '/images/work/Solar Solitude.png',
			meta: 'Poster · Retro Sci-Fi',
			tools: ['Photoshop', 'Illustrator', 'Retro Typography', 'Texture Grading'],
			problem:
				'Conveying ancient majesty and futuristic cosmic mystery using authentic 1970s print textures and chromatic palettes.',
			solution:
				'Centered a colossal brutalist stone portal amidst endless desert dunes underneath an imposing radiant sun, framed in classic Art Deco borders.',
			result:
				'A hauntingly evocative art print echoing vintage paperback covers, imbued with warm ochre sands and quiet cosmic grandeur.',
			highlights: [
				'1970s vintage sci-fi book cover aesthetic',
				'Monumental brutalist stone monolith in desert',
				'Classic Art Deco line frame & serif typography'
			],
			links: [{ label: 'Poster' }],
			aspectRatio: '4/5'
		}
	],
	experience: [
		{
			year: '2026',
			title: 'Frontend & 3D Web Developer',
			org: 'Freelance & Competitions',
			description:
				'Built the Megantara 3D WebGL cultural platform, RangkulUMKM merchant app, and modern portfolio experiences with SvelteKit and Next.js.'
		},
		{
			year: '2025',
			title: 'Media & Visual Design Division',
			org: 'Student Council / School Community',
			description:
				'Documented school events, explored candid night street & still life photography, and designed exhibition posters and visual campaign assets.'
		},
		{
			year: '2024',
			title: 'Stepped into web development',
			org: 'PPLG Major',
			description:
				'Learned HTML, CSS, JavaScript, React, and TypeScript. Began connecting UI design instincts with frontend code implementation.'
		},
		{
			year: '2023',
			title: 'Graphic design & photography exploration',
			org: 'Self-directed',
			description:
				'Designed posters, editorial layouts, and handled camera work. Built foundations in typographic hierarchy, framing, and color grading.'
		}
	],
	contact: {
		email: 'teofiluscharis@gmail.com',
		socials: [
			{ label: 'GitHub', handle: '@T-creator12', href: 'https://github.com/T-creator12' },
			{ label: 'Instagram', handle: '@teofiluscharis', href: 'https://www.instagram.com/teo_aja_dah/' },
		]
	},
	footer: {
		cta: "Let's build something.",
		note: 'A curated collection of frontend & 3D WebGL projects, street & still-life photography, and graphic poster designs.',
		backToTop: 'Back to top',
		builtWith: 'SvelteKit · TypeScript · Tailwind CSS'
	},
	ui: {
		viewDetail: 'View detail',
		close: 'Close',
		next: 'Next',
		previous: 'Previous',
		problem: 'Problem',
		solution: 'Solution',
		result: 'Result',
		role: 'Role',
		tools: 'Tools',
		year: 'Year',
		highlights: 'Key highlights',
		comingSoon: 'Coming soon',
		imageUnavailable: 'Image not available',
		menu: 'Menu',
		categoryLabels: {
			web: 'Web',
			photo: 'Photography',
			poster: 'Poster'
		}
	}
};
