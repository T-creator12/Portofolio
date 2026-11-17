<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Marquee from '$lib/components/ui/Marquee.svelte';
	import WorkSection from '$lib/components/WorkSection.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Services from '$lib/components/Services.svelte';
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const c = $derived(i18n.content);
</script>

<svelte:head>
	<title>{c.meta.title}</title>
	<meta name="description" content={c.meta.description} />
	<meta property="og:title" content={c.meta.title} />
	<meta property="og:description" content={c.meta.description} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/images/og-cover.png" />
	<meta property="og:image:alt" content={c.meta.ogAlt} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={c.meta.title} />
	<meta name="twitter:description" content={c.meta.description} />
	<meta name="twitter:image" content="/images/og-cover.png" />
</svelte:head>

<a
	href="#konten"
	class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[80] focus:border focus:border-line focus:bg-bg focus:px-4 focus:py-2.5 focus:text-[13px] focus:text-ink"
>
	{c.nav.skip}
</a>

<div class="grain min-h-dvh">
	<Nav />

	<main id="konten">
		<Hero />
		<Marquee items={c.marquee} />
		<WorkSection />
		<Skills />
		<Services />
		<About />
		<Contact />
	</main>

	<Footer />
</div>
