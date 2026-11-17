<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';
	import { i18n } from '$lib/i18n.svelte';
	import { theme } from '$lib/stores/theme.svelte';

	let { children }: LayoutProps = $props();

	$effect(() => {
		theme.init();
		i18n.init();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="theme-color" content={theme.isDark ? '#0c0c0b' : '#fcfcfa'} />
	<meta name="color-scheme" content={theme.isDark ? 'dark' : 'light'} />
</svelte:head>

{@render children()}
