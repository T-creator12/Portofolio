import { browser } from '$app/env';

export type ThemeName = 'light' | 'dark';

const STORAGE_KEY = 'oots-theme';

class ThemeState {
	current = $state<ThemeName>('light');

	get isDark() {
		return this.current === 'dark';
	}

	init() {
		if (!browser) return;

		const stored = window.localStorage.getItem(STORAGE_KEY);
		const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		this.current = stored === 'light' || stored === 'dark' ? stored : systemDark ? 'dark' : 'light';
		this.apply();
	}

	toggle() {
		this.current = this.current === 'dark' ? 'light' : 'dark';

		if (!browser) return;

		window.localStorage.setItem(STORAGE_KEY, this.current);
		this.apply();
	}

	private apply() {
		document.documentElement.classList.toggle('dark', this.current === 'dark');
	}
}

export const theme = new ThemeState();
