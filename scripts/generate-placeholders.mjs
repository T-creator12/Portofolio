import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const root = join(process.cwd(), 'static', 'images');

const C = {
	paper: '#fcfcfa',
	surface: '#f4f4f1',
	line: '#e2e2dc',
	ink: '#12120f',
	muted: '#6b6b62',
	blue: '#1d3fd1',
	blueSoft: '#dfe5ff',
	terracotta: '#b8410f',
	terracottaSoft: '#f6d9cc',
	green: '#0f766e',
	greenSoft: '#d3ece8',
	night: '#10130f',
	nightLine: '#2b322c'
};

function frame(width, height, body, background = C.paper) {
	return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img">
	<defs>
		<filter id="grain" x="0" y="0" width="100%" height="100%">
			<feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
			<feColorMatrix type="saturate" values="0" />
		</filter>
		<linearGradient id="fadeBlue" x1="0" y1="0" x2="1" y2="1">
			<stop offset="0" stop-color="${C.blue}" stop-opacity="0.14" />
			<stop offset="1" stop-color="${C.blue}" stop-opacity="0" />
		</linearGradient>
		<linearGradient id="glowOrange" x1="0.5" y1="0" x2="0.5" y2="1">
			<stop offset="0" stop-color="${C.terracotta}" stop-opacity="0.55" />
			<stop offset="1" stop-color="${C.terracotta}" stop-opacity="0" />
		</linearGradient>
		<radialGradient id="sphere" cx="0.35" cy="0.28" r="0.75">
			<stop offset="0" stop-color="#7d95ff" />
			<stop offset="0.55" stop-color="${C.blue}" />
			<stop offset="1" stop-color="#0b1d78" />
		</radialGradient>
	</defs>
	<rect width="${width}" height="${height}" fill="${background}" />
	${body}
	<rect width="${width}" height="${height}" filter="url(#grain)" opacity="0.045" />
</svg>
`;
}

const bar = (x, y, w, h, fill = C.line, opacity = 1) =>
	`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" opacity="${opacity}" />`;

function chrome(width, accent = C.blue) {
	return `
	${bar(0, 0, width, 54, C.surface)}
	${bar(0, 54, width, 1, C.line)}
	<circle cx="30" cy="27" r="6" fill="${accent}" />
	${bar(52, 23, 120, 8, C.line)}
	${bar(width - 210, 23, 60, 8, C.line)}
	${bar(width - 130, 23, 34, 8, C.line)}
	`;
}

function absensi() {
	const w = 1200;
	const h = 800;
	const rows = Array.from({ length: 6 }, (_, i) => {
		const y = 250 + i * 62;
		return `
		${bar(120, y, 240, 10, C.ink, 0.82)}
		${bar(120, y + 22, 150, 7, C.line)}
		<circle cx="700" cy="${y + 10}" r="13" fill="none" stroke="${C.line}" stroke-width="2" />
		<circle cx="760" cy="${y + 10}" r="13" fill="${C.blue}" opacity="${i % 3 === 0 ? 0.18 : 1}" />
		${i % 3 === 0 ? `<path d="M754 ${y + 10}l4 4 8-9" stroke="${C.paper}" stroke-width="2.4" fill="none" />` : ''}
		${bar(860, y + 2, 70, 14, i % 3 === 0 ? C.terracottaSoft : C.greenSoft)}
		${bar(1000, y + 6, 56, 7, C.line)}
		${bar(80, y + 36, 1040, 1, C.line)}
		`;
	}).join('');

	const bars = Array.from({ length: 7 }, (_, i) => {
		const heights = [46, 78, 58, 104, 70, 128, 88];
		const barH = heights[i];
		return bar(80 + i * 26, 700 - barH, 14, barH, i === 5 ? C.blue : C.line);
	}).join('');

	return frame(
		w,
		h,
		`${chrome(w)}
		<rect x="0" y="55" width="96" height="745" fill="${C.surface}" />
		${bar(24, 92, 44, 8, C.blue)}
		${bar(24, 124, 52, 6, C.line)}
		${bar(24, 152, 40, 6, C.line)}
		${bar(24, 180, 56, 6, C.line)}
		${bar(24, 208, 34, 6, C.line)}
		${bar(24, 700, 48, 48, C.ink, 0.9)}

		${bar(120, 92, 210, 14, C.ink, 0.9)}
		${bar(120, 122, 330, 8, C.line)}
		${bar(920, 90, 160, 34, C.blue)}
		${bar(950, 101, 100, 10, C.paper, 0.85)}

		<rect x="120" y="170" width="1040" height="1" fill="${C.line}" />
		${bar(120, 196, 90, 7, C.muted, 0.7)}
		${bar(320, 196, 90, 7, C.muted, 0.7)}
		${bar(700, 196, 90, 7, C.muted, 0.7)}
		${bar(860, 196, 90, 7, C.muted, 0.7)}
		${rows}

		<rect x="780" y="590" width="380" height="150" fill="${C.surface}" />
		${bar(804, 614, 120, 7, C.muted, 0.7)}
		${bars}
		${bar(804, 712, 60, 6, C.line)}
		${bar(1100, 712, 36, 6, C.line)}
		<rect x="120" y="590" width="630" height="150" fill="${C.surface}" />
		${bar(146, 616, 160, 12, C.ink, 0.75)}
		${bar(146, 644, 520, 7, C.line)}
		${bar(146, 662, 440, 7, C.line)}
		${bar(146, 692, 128, 28, C.paper)}
		${bar(162, 702, 96, 8, C.blue)}`,
		C.paper
	);
}

function dashboard() {
	const w = 1200;
	const h = 800;
	const cards = Array.from({ length: 4 }, (_, i) => {
		const x = 120 + (i % 2) * 230;
		const y = 210 + Math.floor(i / 2) * 118;
		return `
		<rect x="${x}" y="${y}" width="210" height="100" fill="${C.paper}" stroke="${C.line}" />
		<circle cx="${x + 26}" cy="${y + 26}" r="6" fill="${i === 2 ? C.terracotta : C.green}" />
		${bar(x + 42, y + 22, 94, 8, C.ink, 0.78)}
		${bar(x + 26, y + 48, 54, 18, C.ink, 0.9)}
		${bar(x + 26, y + 76, 120, 6, C.line)}
		${bar(x + 164, y + 22, 22, 22, C.surface)}
		`;
	}).join('');

	const points = [
		[120, 640],
		[240, 596],
		[360, 612],
		[480, 548],
		[600, 566],
		[720, 502],
		[840, 520],
		[960, 468],
		[1080, 480]
	];
	const path = points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x} ${y}`).join(' ');
	const area = `${path} L1080 690 L120 690 Z`;

	return frame(
		w,
		h,
		`${chrome(w)}
		<rect x="0" y="55" width="96" height="745" fill="${C.surface}" />
		${bar(24, 92, 44, 8, C.blue)}
		${bar(24, 124, 52, 6, C.line)}
		${bar(24, 152, 40, 6, C.line)}
		${bar(24, 180, 56, 6, C.line)}

		${bar(120, 92, 280, 14, C.ink, 0.9)}
		${bar(120, 122, 380, 8, C.line)}
		${bar(858, 88, 72, 30, C.surface)}
		${bar(874, 98, 40, 8, C.muted, 0.7)}
		${bar(946, 88, 214, 30, C.blue)}
		${bar(980, 98, 146, 10, C.paper, 0.85)}

		${bar(120, 168, 70, 7, C.muted, 0.7)}
		<rect x="120" y="188" width="1040" height="1" fill="${C.line}" />
		${cards}

		<rect x="120" y="452" width="720" height="270" fill="${C.paper}" stroke="${C.line}" />
		${bar(144, 476, 140, 9, C.ink, 0.8)}
		${bar(144, 496, 90, 6, C.line)}
		${Array.from({ length: 6 }, (_, i) => `<rect x="144" y="${528 + i * 30}" width="672" height="1" fill="${C.line}" />`).join('')}
		<path d="${area}" fill="url(#fadeBlue)" />
		<path d="${path}" fill="none" stroke="${C.blue}" stroke-width="2.5" />
		${points.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.5" fill="${C.paper}" stroke="${C.blue}" stroke-width="2" />`).join('')}

		<rect x="868" y="452" width="292" height="270" fill="${C.surface}" />
		${bar(892, 476, 110, 9, C.ink, 0.8)}
		${Array.from({ length: 5 }, (_, i) => {
			const y = 512 + i * 38;
			return `${bar(892, y, 60, 7, C.line)}
			${bar(892, y, 60 * [0.9, 0.55, 0.75, 0.4, 0.65][i], 7, C.blue, 0.85)}
			${bar(980, y, 120, 7, C.line)}`;
		}).join('')}
		${bar(892, 700, 90, 7, C.muted, 0.7)}`,
		C.paper
	);
}

function ukm() {
	const w = 1200;
	const h = 800;
	return frame(
		w,
		h,
		`${chrome(w)}
		<rect x="0" y="55" width="1200" height="430" fill="${C.blue}" />
		<circle cx="985" cy="240" r="195" fill="${C.paper}" opacity="0.1" />
		<circle cx="985" cy="240" r="132" fill="${C.paper}" opacity="0.12" />
		<path d="M760 430a225 225 0 0 1 450 0" fill="none" stroke="${C.paper}" stroke-width="1.5" opacity="0.4" />
		${bar(96, 168, 84, 10, C.paper, 0.7)}
		${bar(96, 210, 520, 26, C.paper, 0.95)}
		${bar(96, 252, 430, 26, C.paper, 0.95)}
		${bar(96, 308, 320, 9, C.paper, 0.5)}
		${bar(96, 330, 280, 9, C.paper, 0.5)}
		${bar(96, 378, 150, 38, C.paper)}
		${bar(120, 392, 86, 10, C.blue)}
		${bar(262, 378, 150, 38, 'transparent')}
		<rect x="262" y="378" width="150" height="38" fill="none" stroke="${C.paper}" stroke-opacity="0.5" />
		${bar(288, 392, 90, 10, C.paper, 0.75)}

		<rect x="740" y="520" width="364" height="220" fill="${C.paper}" stroke="${C.line}" />
		${bar(768, 548, 120, 10, C.ink, 0.85)}
		${bar(768, 568, 210, 7, C.line)}
		<rect x="768" y="596" width="140" height="34" fill="${C.paper}" stroke="${C.line}" />
		<rect x="924" y="596" width="152" height="34" fill="${C.paper}" stroke="${C.line}" />
		<rect x="768" y="642" width="308" height="34" fill="${C.paper}" stroke="${C.line}" />
		${bar(768, 694, 132, 30, C.blue)}
		${bar(792, 704, 84, 10, C.paper, 0.9)}

		${bar(96, 548, 120, 8, C.muted, 0.7)}
		${bar(96, 574, 520, 9, C.line)}
		${bar(96, 594, 460, 9, C.line)}
		${Array.from({ length: 3 }, (_, i) => {
			const x = 96 + i * 196;
			const num = String(i + 1).padStart(2, '0');
			return `
			<rect x="${x}" y="634" width="176" height="104" fill="${C.surface}" />
			<text x="${x + 20}" y="674" font-family="monospace" font-size="13" fill="${C.blue}">${num}</text>
			${bar(x + 20, 690, 104, 8, C.ink, 0.7)}
			${bar(x + 20, 710, 76, 7, C.line)}`;
		}).join('')}`,
		C.paper
	);
}

function umkm() {
	const w = 1200;
	const h = 800;
	const products = Array.from({ length: 6 }, (_, i) => {
		const x = 120 + (i % 3) * 340;
		const y = 300 + Math.floor(i / 3) * 232;
		const shapes = [
			`<rect x="${x + 66}" y="${y + 52}" width="56" height="82" rx="8" fill="${C.blue}" opacity="0.85" /><rect x="${x + 78}" y="${y + 38}" width="32" height="18" rx="4" fill="${C.ink}" opacity="0.8" />`,
			`<rect x="${x + 58}" y="${y + 46}" width="72" height="88" fill="${C.terracotta}" opacity="0.85" /><rect x="${x + 58}" y="${y + 46}" width="72" height="14" fill="${C.ink}" opacity="0.25" />`,
			`<circle cx="${x + 94}" cy="${y + 92}" r="42" fill="${C.green}" opacity="0.82" /><rect x="${x + 84}" y="${y + 36}" width="20" height="20" fill="${C.ink}" opacity="0.7" />`,
			`<rect x="${x + 52}" y="${y + 60}" width="84" height="70" rx="35" fill="${C.ink}" opacity="0.08" /><rect x="${x + 66}" y="${y + 44}" width="56" height="90" rx="6" fill="${C.blue}" opacity="0.6" />`,
			`<path d="M${x + 56} ${y + 124}l38-70 38 70Z" fill="${C.terracotta}" opacity="0.8" />`,
			`<rect x="${x + 62}" y="${y + 54}" width="64" height="64" fill="${C.green}" opacity="0.7" transform="rotate(12 ${x + 94} ${y + 86})" />`
		];
		return `
		<rect x="${x}" y="${y}" width="300" height="208" fill="${C.paper}" stroke="${C.line}" />
		<rect x="${x + 1}" y="${y + 1}" width="298" height="132" fill="${C.surface}" />
		${shapes[i]}
		${bar(x + 16, y + 148, 152, 9, C.ink, 0.8)}
		${bar(x + 16, y + 166, 98, 7, C.line)}
		${bar(x + 16, y + 184, 54, 10, C.blue)}
		${bar(x + 236, y + 148, 48, 20, C.surface)}
		${bar(x + 248, y + 154, 24, 8, C.muted, 0.6)}
		`;
	}).join('');

	return frame(
		w,
		h,
		`${chrome(w)}
		${bar(120, 90, 240, 14, C.ink, 0.9)}
		${bar(120, 120, 330, 8, C.line)}
		${bar(820, 84, 340, 38, C.surface)}
		<circle cx="848" cy="103" r="6" fill="none" stroke="${C.muted}" stroke-width="1.6" />
		${bar(866, 99, 180, 8, C.line)}
		${bar(1080, 96, 62, 14, C.blue, 0.15)}

		${bar(120, 170, 56, 8, C.muted, 0.7)}
		${[72, 64, 82, 58].map((width, i) => `<rect x="${196 + i * 110}" y="164" width="${width + 16}" height="22" fill="${i === 0 ? C.ink : C.paper}" />${bar(206 + i * 110, 172, width, 6, i === 0 ? C.paper : C.line)}`).join('')}
		${bar(990, 172, 170, 7, C.muted, 0.7)}

		<rect x="120" y="208" width="1040" height="1" fill="${C.line}" />
		${products}
		${bar(120, 764, 1040, 1, C.line)}`,
		C.paper
	);
}

/* Orang selalu tidak menghadap kamera: kepala, bahu, dan punggung saja. */
function backFigure(x, ground, scale, fill = '#0b0f0d') {
	const s = scale;
	return `
		<circle cx="${x}" cy="${ground - 112 * s}" r="${19 * s}" fill="${fill}" />
		<path d="M${x - 30 * s} ${ground - 40 * s} L${x - 25 * s} ${ground - 92 * s} Q${x} ${ground - 112 * s} ${x + 25 * s} ${ground - 92 * s} L${x + 30 * s} ${ground - 40 * s} Z" fill="${fill}" />
		<rect x="${x - 22 * s}" y="${ground - 44 * s}" width="${17 * s}" height="${44 * s}" rx="${6 * s}" fill="${fill}" />
		<rect x="${x + 5 * s}" y="${ground - 44 * s}" width="${17 * s}" height="${44 * s}" rx="${6 * s}" fill="${fill}" />
	`;
}

function fotoJalanan() {
	const w = 1200;
	const h = 800;
	const windows = Array.from({ length: 5 }, (_, row) =>
		[70, 168]
			.map(
				(x) =>
					`<rect x="${x}" y="${118 + row * 90}" width="48" height="44" fill="${row % 2 === 0 ? C.terracotta : '#f2b38f'}" opacity="${0.14 + ((row + x) % 3) * 0.11}" />`
			)
			.join('')
	).join('');
	const rightWindows = Array.from({ length: 5 }, (_, row) =>
		[966, 1064]
			.map(
				(x) =>
					`<rect x="${x}" y="${102 + row * 88}" width="42" height="40" fill="${row % 2 === 0 ? '#f2b38f' : C.blue}" opacity="${0.12 + ((row + x) % 3) * 0.1}" />`
			)
			.join('')
	).join('');
	const reflections = Array.from(
		{ length: 13 },
		(_, i) =>
			`${bar(120 + i * 78, 566, 10, 96 + (i % 4) * 36, i % 2 === 0 ? C.terracotta : C.paper, 0.09)}`
	).join('');

	return frame(
		w,
		h,
		`<rect width="1200" height="800" fill="${C.night}" />
		<ellipse cx="620" cy="780" rx="700" ry="470" fill="url(#glowOrange)" opacity="0.7" />
		<rect width="1200" height="800" fill="url(#fadeBlue)" opacity="0.22" />

		<path d="M0 0h344l184 556H0Z" fill="#171c18" />
		<path d="M1200 0H852L668 556h532Z" fill="#141a16" />
		${windows}
		${rightWindows}
		<rect x="44" y="470" width="250" height="18" fill="${C.terracotta}" opacity="0.55" />
		<rect x="920" y="446" width="240" height="16" fill="${C.blue}" opacity="0.45" />
		<rect x="512" y="420" width="170" height="10" fill="${C.terracotta}" opacity="0.6" />

		<path d="M0 556h1200v244H0Z" fill="#1b201c" />
		${reflections}
		<path d="M560 556l40 244h80l-24-244Z" fill="${C.paper}" opacity="0.05" />

		${backFigure(742, 636, 0.82, '#0b0f0d')}
		${backFigure(516, 742, 1.18, '#090d0a')}
		<path d="M490 622q26-18 52 0" fill="none" stroke="${C.terracotta}" stroke-width="3" opacity="0.5" />
		<path d="M720 548q22-14 44 0" fill="none" stroke="${C.paper}" stroke-width="2" opacity="0.3" />

		${bar(60, 60, 120, 8, C.paper, 0.55)}
		${bar(60, 84, 80, 6, C.paper, 0.28)}
		${bar(1020, 720, 120, 6, C.paper, 0.3)}
		<rect x="54" y="54" width="1092" height="692" fill="none" stroke="${C.paper}" stroke-opacity="0.12" />`,
		C.night
	);
}

function fotoOrang() {
	const w = 1200;
	const h = 800;
	const rim = (x, y, s, opacity) =>
		`<path d="M${x - 24 * s} ${y - 56 * s} Q${x} ${y - 78 * s} ${x + 24 * s} ${y - 56 * s}" fill="none" stroke="#f2b38f" stroke-width="${3 * s}" opacity="${opacity}" />`;

	return frame(
		w,
		h,
		`<rect width="1200" height="800" fill="#241a16" />
		<ellipse cx="860" cy="320" rx="340" ry="230" fill="${C.terracotta}" opacity="0.2" />
		<circle cx="860" cy="320" r="168" fill="#f2b38f" opacity="0.5" />
		<circle cx="860" cy="320" r="112" fill="#ffd7b0" opacity="0.65" />
		<path d="M0 520l220-84 210 84 230-104 250 104 290-60v340H0Z" fill="#1f211b" />
		<rect x="0" y="570" width="1200" height="230" fill="#171b17" />
		${bar(0, 570, 1200, 2, '#f2b38f', 0.18)}

		${backFigure(316, 760, 1.1, '#0b0f0d')}
		${backFigure(626, 800, 1.52, '#090d0a')}
		${backFigure(928, 744, 0.94, '#0b0f0d')}
		${rim(316, 622, 1.1, 0.4)}
		${rim(626, 630, 1.52, 0.5)}
		${rim(928, 652, 0.94, 0.35)}

		${Array.from({ length: 9 }, (_, i) => `<rect x="${70 + i * 128}" y="${594 + (i % 3) * 22}" width="60" height="4" fill="#f2b38f" opacity="0.1" />`).join('')}

		${bar(64, 62, 140, 8, C.paper, 0.5)}
		${bar(64, 86, 96, 6, C.paper, 0.25)}
		${bar(1016, 724, 120, 6, C.paper, 0.28)}
		<rect x="54" y="54" width="1092" height="692" fill="none" stroke="${C.paper}" stroke-opacity="0.1" />`,
		'#241a16'
	);
}

function fotoProduk() {
	const w = 1200;
	const h = 800;
	return frame(
		w,
		h,
		`<rect width="1200" height="800" fill="${C.surface}" />
		<path d="M0 0h620L280 800H0Z" fill="${C.paper}" opacity="0.6" />
		<rect x="0" y="556" width="1200" height="244" fill="${C.paper}" />
		<rect x="0" y="555" width="1200" height="1" fill="${C.line}" />
		<ellipse cx="600" cy="574" rx="444" ry="52" fill="${C.ink}" opacity="0.08" />

		<rect x="252" y="222" width="180" height="332" fill="${C.paper}" stroke="${C.line}" />
		<ellipse cx="342" cy="552" rx="98" ry="18" fill="${C.ink}" opacity="0.12" />
		<rect x="316" y="280" width="52" height="42" rx="6" fill="${C.ink}" opacity="0.85" />
		<rect x="300" y="318" width="84" height="204" rx="16" fill="${C.blue}" opacity="0.9" />
		<rect x="312" y="342" width="20" height="156" rx="8" fill="${C.paper}" opacity="0.22" />
		<rect x="306" y="392" width="72" height="64" fill="${C.paper}" opacity="0.9" />
		${bar(316, 414, 52, 8, C.blue, 0.75)}
		${bar(320, 432, 36, 5, C.muted, 0.5)}

		<rect x="496" y="268" width="210" height="286" fill="${C.terracotta}" opacity="0.9" />
		<path d="M496 268l58-48h210l-58 48Z" fill="#d97a4f" opacity="0.9" />
		<path d="M706 268l58-48v286l-58 48Z" fill="#8e2f0a" opacity="0.75" />
		<ellipse cx="600" cy="556" rx="122" ry="18" fill="${C.ink}" opacity="0.1" />
		${bar(524, 356, 132, 14, C.paper, 0.85)}
		${bar(524, 384, 92, 8, C.paper, 0.5)}
		<rect x="524" y="438" width="86" height="28" fill="${C.paper}" opacity="0.85" />

		<rect x="800" y="304" width="172" height="250" rx="26" fill="${C.green}" opacity="0.85" />
		<rect x="812" y="270" width="148" height="40" rx="10" fill="${C.ink}" opacity="0.82" />
		<ellipse cx="886" cy="558" rx="104" ry="16" fill="${C.ink}" opacity="0.1" />
		<rect x="820" y="356" width="132" height="120" fill="${C.paper}" opacity="0.88" />
		${bar(838, 388, 96, 10, C.green, 0.8)}
		${bar(838, 412, 64, 7, C.muted, 0.55)}
		${bar(838, 442, 78, 6, C.line)}

		${bar(72, 72, 120, 8, C.muted, 0.55)}
		${bar(72, 96, 80, 6, C.line)}
		${bar(1008, 724, 120, 6, C.muted, 0.4)}
		<path d="M72 640v48h48M1128 640v48h-48" fill="none" stroke="${C.muted}" stroke-opacity="0.4" stroke-width="2" />`,
		C.surface
	);
}

function posterFestival() {
	const w = 1000;
	const h = 1250;
	const grid = Array.from(
		{ length: 9 },
		(_, i) =>
			`<rect x="${80 + i * 98}" y="80" width="1" height="1090" fill="${C.paper}" opacity="0.08" />`
	).join('');
	return frame(
		w,
		h,
		`<rect width="1000" height="1250" fill="${C.green}" />
		${grid}
		<circle cx="700" cy="330" r="230" fill="${C.terracotta}" />
		<circle cx="700" cy="330" r="168" fill="none" stroke="${C.paper}" stroke-opacity="0.4" stroke-width="1.5" />
		<circle cx="700" cy="330" r="112" fill="none" stroke="${C.paper}" stroke-opacity="0.25" />
		<circle cx="700" cy="330" r="56" fill="${C.paper}" />

		${bar(80, 88, 300, 12, C.paper, 0.7)}
		${bar(80, 112, 180, 8, C.paper, 0.4)}

		<path d="M80 560h150v-150h150v300H80Z" fill="${C.paper}" />
		<path d="M420 560h170v-300h120v300h-120v120H420Z" fill="${C.cream ?? C.paper}" opacity="0.92" />
		<circle cx="500" cy="700" r="80" fill="${C.terracotta}" />

		${bar(80, 760, 560, 34, C.paper, 0.95)}
		${bar(80, 810, 420, 34, C.paper, 0.95)}
		${bar(80, 860, 300, 34, C.paper, 0.95)}

		<rect x="80" y="960" width="840" height="1" fill="${C.paper}" opacity="0.25" />
		${bar(80, 990, 180, 10, C.paper, 0.8)}
		${bar(80, 1012, 120, 7, C.paper, 0.4)}
		${bar(560, 990, 360, 10, C.paper, 0.8)}
		${bar(560, 1012, 260, 7, C.paper, 0.4)}
		${bar(80, 1080, 240, 58, C.paper)}
		${bar(104, 1100, 120, 14, C.green)}
		${bar(340, 1080, 240, 58, 'transparent')}
		<rect x="340" y="1080" width="240" height="58" fill="none" stroke="${C.paper}" stroke-opacity="0.55" />
		${bar(368, 1100, 140, 12, C.paper, 0.8)}`,
		C.green
	);
}

function posterLiterasi() {
	const w = 1000;
	const h = 1250;
	const panel = (x, variant) => {
		const shapes = [
			`<path d="M${x + 40} 300h140l40 40v210H${x + 40}Z" fill="${C.cream ?? C.paper}" />
			<path d="M${x + 180} 300v40h40" fill="none" stroke="${C.green}" stroke-width="3" />
			${bar(x + 70, 400, 100, 10, C.green, 0.85)}
			${bar(x + 70, 424, 140, 8, C.green, 0.4)}
			<circle cx="${x + 150}" cy="520" r="34" fill="${C.terracotta}" />`,
			`<path d="M${x + 40} 560h220v-200l-110-70-110 70Z" fill="${C.cream ?? C.paper}" />
			<path d="M${x + 150} 360v200" stroke="${C.green}" stroke-width="3" />
			<circle cx="${x + 150}" cy="470" r="42" fill="${C.terracotta}" />
			<rect x="${x + 128}" y="452" width="44" height="36" fill="${C.green}" />`,
			`<rect x="${x + 50}" y="290" width="200" height="240" rx="24" fill="${C.cream ?? C.paper}" />
			<rect x="${x + 74}" y="318" width="152" height="150" fill="${C.green}" opacity="0.18" />
			<circle cx="${x + 150}" cy="560" r="52" fill="${C.terracotta}" />
			<path d="M${x + 128} 548l14 14 24-28" stroke="${C.cream ?? C.paper}" stroke-width="6" fill="none" />`
		];
		return `
		<rect x="${x}" y="60" width="280" height="1130" fill="${C.cream ?? C.paper}" />
		<rect x="${x}" y="60" width="280" height="10" fill="${variant}" />
		${bar(x + 40, 118, 110, 8, C.green, 0.7)}
		${bar(x + 40, 142, 70, 6, C.green, 0.35)}
		${shapes[variant === C.terracotta ? 0 : variant === C.green ? 1 : 2]}
		${bar(x + 40, 760, 200, 18, C.ink, 0.85)}
		${bar(x + 40, 790, 160, 18, C.ink, 0.85)}
		${bar(x + 40, 830, 200, 7, C.muted, 0.55)}
		${bar(x + 40, 848, 180, 7, C.muted, 0.55)}
		${bar(x + 40, 866, 140, 7, C.muted, 0.55)}
		${bar(x + 40, 1080, 80, 32, variant)}
		${bar(x + 58, 1092, 44, 8, C.cream ?? C.paper, 0.9)}
		`;
	};

	return frame(
		w,
		h,
		`<rect width="1000" height="1250" fill="${C.greenSoft}" />
		${panel(40, C.green)}
		${panel(360, C.terracotta)}
		${panel(680, C.blue)}
		${bar(40, 120, 920, 1, C.green, 0.2)}`,
		C.greenSoft
	);
}

function portrait() {
	const w = 1000;
	const h = 1250;
	return frame(
		w,
		h,
		`<rect width="1000" height="1250" fill="${C.surface}" />
		${Array.from({ length: 11 }, (_, i) => `<rect x="${i * 100}" y="0" width="1" height="1250" fill="${C.line}" />`).join('')}
		${Array.from({ length: 13 }, (_, i) => `<rect x="0" y="${i * 100}" width="1000" height="1" fill="${C.line}" />`).join('')}

		<path d="M300 900V520a200 200 0 0 1 400 0v380Z" fill="${C.green}" opacity="0.9" />
		<path d="M360 900V540a140 140 0 0 1 280 0v360Z" fill="${C.paper}" opacity="0.55" />

		<ellipse cx="500" cy="700" rx="250" ry="90" fill="none" stroke="${C.terracotta}" stroke-width="56" transform="rotate(-18 500 700)" opacity="0.92" />
		<ellipse cx="500" cy="700" rx="250" ry="90" fill="none" stroke="${C.paper}" stroke-width="1.5" transform="rotate(-18 500 700)" opacity="0.35" />

		<circle cx="500" cy="470" r="170" fill="url(#sphere)" />
		<circle cx="446" cy="410" r="58" fill="${C.paper}" opacity="0.16" />

		${bar(80, 80, 120, 8, C.muted, 0.6)}
		${bar(80, 104, 80, 6, C.line)}
		${bar(800, 1120, 120, 8, C.muted, 0.6)}
		${bar(850, 1144, 70, 6, C.line)}
		<circle cx="500" cy="700" r="250" fill="none" stroke="${C.ink}" stroke-opacity="0.12" />`,
		C.surface
	);
}

function ogCover() {
	const w = 1200;
	const h = 630;
	return frame(
		w,
		h,
		`<rect width="1200" height="630" fill="${C.paper}" />
		${Array.from({ length: 12 }, (_, i) => `<rect x="${i * 100}" y="0" width="1" height="630" fill="${C.line}" opacity="0.7" />`).join('')}

		<circle cx="1000" cy="150" r="180" fill="${C.blue}" opacity="0.1" />
		<circle cx="1000" cy="150" r="112" fill="none" stroke="${C.blue}" stroke-opacity="0.28" />
		<circle cx="1000" cy="150" r="54" fill="${C.terracotta}" />

		<rect x="80" y="86" width="150" height="10" fill="${C.blue}" />
		${bar(80, 112, 90, 7, C.muted, 0.6)}

		<rect x="80" y="190" width="520" height="78" fill="${C.blue}" />
		<rect x="80" y="284" width="400" height="78" fill="${C.ink}" />
		<rect x="80" y="378" width="260" height="78" fill="${C.green}" />

		${bar(80, 500, 420, 9, C.line)}
		${bar(80, 520, 340, 9, C.line)}

		${Array.from({ length: 6 }, (_, i) => `<circle cx="${760 + (i % 3) * 34}" cy="${470 + Math.floor(i / 3) * 34}" r="6" fill="${C.green}" opacity="0.55" />`).join('')}

		<rect x="1080" y="510" width="40" height="40" fill="${C.terracotta}" />
		${bar(1080, 570, 40, 6, C.muted, 0.5)}`,
		C.paper
	);
}

const assets = [
	['work/absensi.svg', absensi()],
	['work/dashboard.svg', dashboard()],
	['work/ukm.svg', ukm()],
	['work/umkm.svg', umkm()],
	['work/foto-jalanan.svg', fotoJalanan()],
	['work/foto-orang.svg', fotoOrang()],
	['work/foto-produk.svg', fotoProduk()],
	['work/poster-festival.svg', posterFestival()],
	['work/poster-literasi.svg', posterLiterasi()],
	['art/portrait.svg', portrait()],
	['og-cover.svg', ogCover()]
];

for (const [file, content] of assets) {
	const target = join(root, file);
	mkdirSync(dirname(target), { recursive: true });
	writeFileSync(target, content, 'utf8');
	console.log('wrote', target);
}
