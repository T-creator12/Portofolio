<script lang="ts">
	import { browser } from '$app/env';
	import { fly } from 'svelte/transition';
	import { prefersReducedMotion } from 'svelte/motion';
	import { i18n } from '$lib/i18n.svelte';
	import Icon from './ui/Icon.svelte';
	import LanguageToggle from './LanguageToggle.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import ScrollProgress from './ui/ScrollProgress.svelte';

	const c = $derived(i18n.content);

	let active = $state('');
	let scrolled = $state(false);
	let menuOpen = $state(false);
	let menuPanel = $state<HTMLElement>();
	let menuButton = $state<HTMLButtonElement>();

	const initials = $derived(
		c.hero.name
			.split(' ')
			.map((word) => word.charAt(0))
			.slice(0, 2)
			.join('')
	);

	function isActive(id: string) {
		return active === `#${id}`;
	}

	function closeMenu() {
		menuOpen = false;
		menuButton?.focus();
	}

	$effect(() => {
		if (!browser) return;

		const ids = c.nav.items.map((item) => item.id);
		const sections = ids
			.map((id) => document.getElementById(id))
			.filter((el): el is HTMLElement => el !== null);

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) active = `#${entry.target.id}`;
				}
			},
			{ rootMargin: '-42% 0px -52% 0px', threshold: 0 }
		);

		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	});

	$effect(() => {
		if (!browser) return;

		function onScroll() {
			scrolled = window.scrollY > 8;
		}

		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });

		return () => window.removeEventListener('scroll', onScroll);
	});

	$effect(() => {
		if (!browser || !menuOpen) return;

		const previous = document.documentElement.style.overflow;
		document.documentElement.style.overflow = 'hidden';
		menuPanel?.querySelector<HTMLAnchorElement>('a')?.focus();

		return () => {
			document.documentElement.style.overflow = previous;
		};
	});
</script>

<svelte:window
	onkeydown={(event) => {
		if (event.key === 'Escape' && menuOpen) closeMenu();
	}}
/>

<ScrollProgress />

<header
	class="sticky top-0 z-40 border-b bg-bg/85 backdrop-blur-md transition-colors duration-300 {scrolled
		? 'border-line'
		: 'border-transparent'}"
>
	<div
		class="mx-auto flex h-[62px] max-w-[1440px] items-center justify-between gap-4 px-6 lg:h-[74px] lg:px-24"
	>
		<a href="#atas" class="group flex items-center gap-2.5" aria-label={c.hero.name}>
			<span
				class="flex h-8 w-8 items-center justify-center bg-ink font-mono text-[11px] font-medium text-bg transition-transform duration-300 group-hover:-rotate-6"
			>
				{initials}
			</span>
			<span class="hidden font-mono text-[12px] tracking-[1.1px] lowercase sm:block">
				{c.hero.name}
			</span>
		</a>

		<div class="flex items-center gap-2 sm:gap-3">
			<nav class="hidden items-center gap-6 lg:flex" aria-label={c.nav.mainLabel}>
				{#each c.nav.items as item (item.id)}
					<a
						href={`#${item.id}`}
						class="group relative py-1 text-[13.5px] transition-colors {isActive(item.id)
							? 'text-ink'
							: 'text-muted hover:text-ink'}"
					>
						{item.label}
						<span
							class="absolute inset-x-0 -bottom-0.5 h-px origin-left bg-primary transition-transform duration-300 {isActive(
								item.id
							)
								? 'scale-x-100'
								: 'scale-x-0 group-hover:scale-x-100'}"
						></span>
					</a>
				{/each}
			</nav>

			<div class="hidden h-5 w-px bg-line lg:block"></div>

			<div class="flex items-center gap-2">
				<LanguageToggle />
				<ThemeToggle />
			</div>

			<a
				href="#kontak"
				class="group hidden h-10 items-center gap-2 border border-line px-3.5 text-[12.5px] transition-colors hover:bg-surface lg:flex"
			>
				{c.nav.contactCta}
				<Icon
					name="arrow-up-right"
					size={13}
					class="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
				/>
			</a>

			<button
				bind:this={menuButton}
				type="button"
				onclick={() => (menuOpen = true)}
				aria-label={c.nav.menu}
				aria-expanded={menuOpen}
				aria-controls="menu-mobile"
				class="flex h-10 w-10 items-center justify-center border border-line transition-colors hover:bg-surface lg:hidden"
			>
				<Icon name="menu" size={18} />
			</button>
		</div>
	</div>
</header>

{#if menuOpen}
	<div class="fixed inset-0 z-50 lg:hidden" id="menu-mobile">
		<button
			type="button"
			class="absolute inset-0 bg-ink/30 backdrop-blur-sm"
			aria-label={c.nav.close}
			onclick={closeMenu}
		></button>

		<nav
			bind:this={menuPanel}
			in:fly={{ y: -18, duration: prefersReducedMotion.current ? 0 : 260 }}
			class="relative border-b border-line bg-bg px-6 pt-4 pb-7 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.4)]"
			aria-label={c.ui.menu}
		>
			<div class="flex items-center justify-between">
				<span class="font-mono text-[10.5px] tracking-[1.4px] text-muted uppercase">
					{c.ui.menu}
				</span>
				<button
					type="button"
					onclick={closeMenu}
					aria-label={c.nav.close}
					class="flex h-10 w-10 items-center justify-center border border-line"
				>
					<Icon name="close" size={16} />
				</button>
			</div>

			<div class="mt-5 flex flex-col">
				{#each c.nav.items as item, i (item.id)}
					<a
						href={`#${item.id}`}
						onclick={closeMenu}
						class="flex items-baseline justify-between border-t border-line py-4 text-[26px] font-medium tracking-[-0.5px] transition-colors hover:text-primary"
					>
						{item.label}
						<span class="font-mono text-[10.5px] tracking-[1.2px] text-muted">
							0{i + 1}
						</span>
					</a>
				{/each}
			</div>

			<div class="mt-6 flex items-center justify-between gap-3">
				<div class="flex items-center gap-2">
					<LanguageToggle />
					<ThemeToggle />
				</div>
				<a
					href="#kontak"
					onclick={closeMenu}
					class="flex h-10 items-center gap-2 bg-primary px-4 text-[13px] font-medium text-on-primary"
				>
					{c.nav.contactCta}
					<Icon name="arrow-up-right" size={14} />
				</a>
			</div>
		</nav>
	</div>
{/if}
