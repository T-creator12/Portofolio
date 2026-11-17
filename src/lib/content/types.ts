export type Locale = 'id' | 'en';

export type Category = 'web' | 'photo' | 'poster';

export type Accent = 'web' | 'photo' | 'poster' | 'ink';

export type SocialLink = {
	label: string;
	handle: string;
	href?: string;
};

export type NavItem = {
	id: string;
	label: string;
};

export type Stat = {
	value: string;
	label: string;
};

export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export type Skill = {
	name: string;
	level: SkillLevel;
};

export type SkillGroup = {
	id: string;
	index: string;
	label: string;
	title: string;
	description: string;
	accent: Accent;
	featured?: boolean;
	skills: Skill[];
};

export type Service = {
	id: string;
	index: string;
	title: string;
	description: string;
	deliverables: string[];
	accent: Accent;
};

export type WorkLink = {
	label: string;
	href?: string;
};

export type Work = {
	slug: string;
	title: string;
	category: Category;
	year: number;
	role: string;
	summary: string;
	cover: string;
	meta: string;
	tools: string[];
	problem: string;
	solution: string;
	result: string;
	highlights: string[];
	links: WorkLink[];
	aspectRatio?: '3/2' | '16/9' | '4/5' | '1/1' | '4/3' | 'auto';
};

export type Experience = {
	year: string;
	title: string;
	org: string;
	description: string;
};

export type ProcessStep = {
	index: string;
	title: string;
	description: string;
};

export type Fact = {
	label: string;
	value: string;
};

export type ContactFormCopy = {
	name: string;
	namePlaceholder: string;
	email: string;
	emailPlaceholder: string;
	message: string;
	messagePlaceholder: string;
	submit: string;
	sending: string;
	success: string;
	invalid: string;
	required: string;
	invalidEmail: string;
	note: string;
};

export type ContactCopy = {
	label: string;
	title: string;
	description: string;
	emailLabel: string;
	socialLabel: string;
	responseNote: string;
	form: ContactFormCopy;
};

export type Content = {
	meta: {
		title: string;
		description: string;
		ogAlt: string;
	};
	nav: {
		items: NavItem[];
		mainLabel: string;
		contactCta: string;
		menu: string;
		close: string;
		theme: string;
		language: string;
		skip: string;
	};
	hero: {
		availability: string;
		name: string;
		roles: string[];
		intro: string;
		primaryCta: string;
		secondaryCta: string;
		scrollHint: string;
		stats: Stat[];
	};
	marquee: string[];
	sections: {
		work: {
			label: string;
			title: string;
			description: string;
			filters: Record<Category | 'all', string>;
		};
		skills: {
			label: string;
			title: string;
			description: string;
			levelLegend: string;
			levelLabels: [string, string, string, string, string];
		};
		services: {
			label: string;
			title: string;
			description: string;
			deliverableLabel: string;
		};
		process: {
			label: string;
			title: string;
			description: string;
		};
		about: {
			label: string;
			title: string;
			portraitAlt: string;
			bio: string[];
			facts: Fact[];
			learningLabel: string;
			learning: string[];
		};
		timeline: {
			label: string;
			title: string;
			description: string;
		};
		contact: ContactCopy;
	};
	skillGroups: SkillGroup[];
	services: Service[];
	process: ProcessStep[];
	works: Work[];
	experience: Experience[];
	contact: {
		email: string;
		socials: SocialLink[];
	};
	footer: {
		cta: string;
		note: string;
		backToTop: string;
		builtWith: string;
	};
	ui: {
		viewDetail: string;
		close: string;
		next: string;
		previous: string;
		problem: string;
		solution: string;
		result: string;
		role: string;
		tools: string;
		year: string;
		highlights: string;
		comingSoon: string;
		imageUnavailable: string;
		menu: string;
		categoryLabels: Record<Category, string>;
	};
};
