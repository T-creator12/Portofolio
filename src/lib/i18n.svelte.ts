import { browser } from '$app/env';
import { en } from '$lib/content/en';
import { id } from '$lib/content/id';
import type { Content, Locale } from '$lib/content/types';

const dictionaries: Record<Locale, Content> = { id, en };
const STORAGE_KEY = 'oots-locale';

class I18n {
	locale = $state<Locale>('id');

	get content(): Content {
		return dictionaries[this.locale];
	}

	init() {
		if (!browser) return;

		const fromUrl = new URLSearchParams(window.location.search).get('lang');
		const stored = window.localStorage.getItem(STORAGE_KEY);
		const next: Locale =
			fromUrl === 'en' || fromUrl === 'id'
				? fromUrl
				: stored === 'en' || stored === 'id'
					? stored
					: 'id';

		this.locale = next;
		this.apply();
	}

	set(next: Locale) {
		this.locale = next;

		if (!browser) return;

		window.localStorage.setItem(STORAGE_KEY, next);
		this.apply();
	}

	toggle() {
		this.set(this.locale === 'id' ? 'en' : 'id');
	}

	private apply() {
		document.documentElement.lang = this.locale;
	}
}

export const i18n = new I18n();
