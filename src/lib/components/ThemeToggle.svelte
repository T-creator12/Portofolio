<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';
	import { theme } from '$lib/stores/theme.svelte';
	import Icon from './ui/Icon.svelte';

	const label = $derived(i18n.content.nav.theme);
</script>

<button
	type="button"
	onclick={() => theme.toggle()}
	aria-label={label}
	title={label}
	class="flex h-10 w-10 shrink-0 items-center justify-center border border-line transition-colors hover:bg-surface"
>
	<span class="dark:hidden"><Icon name="moon" size={16} /></span>
	<span class="hidden dark:block"><Icon name="sun" size={16} /></span>
</button>
