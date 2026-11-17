<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';

	const label = $derived(i18n.content.nav.language);
</script>

<button
	type="button"
	onclick={() => i18n.toggle()}
	aria-label={label}
	title={label}
	class="flex h-10 shrink-0 items-center gap-1.5 border border-line px-2.5 font-mono text-[11px] tracking-[1px] transition-colors hover:bg-surface"
>
	<span class={i18n.locale === 'id' ? 'font-medium text-ink' : 'text-muted'}>ID</span>
	<span class="text-line">/</span>
	<span class={i18n.locale === 'en' ? 'font-medium text-ink' : 'text-muted'}>EN</span>
</button>
