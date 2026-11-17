<script lang="ts">
	import type { Category, Work } from '$lib/content/types';
	import { i18n } from '$lib/i18n.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { prefersReducedMotion } from 'svelte/motion';
	import { fade } from 'svelte/transition';
	import Icon from './ui/Icon.svelte';
	import MediaFrame from './ui/MediaFrame.svelte';
	import Modal from './ui/Modal.svelte';
	import SectionHeader from './ui/SectionHeader.svelte';
	import WorkCard from './WorkCard.svelte';

	const c = $derived(i18n.content);

	const filters = ['all', 'web', 'photo', 'poster'] as const;
	type Filter = (typeof filters)[number];

	let active = $state<Filter>('all');
	let selected = $state(0);
	let open = $state(false);

	const filtered = $derived(
		active === 'all' ? c.works : c.works.filter((work) => work.category === active)
	);
	const current = $derived(filtered[selected] ?? c.works[0]);
	const previousWork = $derived(
		filtered.length > 0 ? filtered[(selected - 1 + filtered.length) % filtered.length] : undefined
	);
	const nextWork = $derived(
		filtered.length > 0 ? filtered[(selected + 1) % filtered.length] : undefined
	);

	const dots: Record<Category, string> = {
		web: 'bg-accent-web',
		photo: 'bg-accent-photo',
		poster: 'bg-accent-poster'
	};

	type Ratio = '3/2' | '16/9' | '4/5' | '1/1' | '4/3' | 'auto';

	const modalRatio: Record<Category, Ratio> = {
		web: '16/9',
		photo: 'auto',
		poster: '4/5'
	};

	function count(filter: Filter) {
		return filter === 'all' ? c.works.length : c.works.filter((w) => w.category === filter).length;
	}

	function openWork(work: Work) {
		const index = filtered.findIndex((item) => item.slug === work.slug);
		selected = index >= 0 ? index : 0;
		open = true;
	}

	function step(delta: number) {
		if (filtered.length === 0) return;
		selected = (selected + delta + filtered.length) % filtered.length;
	}

	function handleKey(event: KeyboardEvent) {
		if (!open) return;

		if (event.key === 'ArrowRight') {
			event.preventDefault();
			step(1);
		}

		if (event.key === 'ArrowLeft') {
			event.preventDefault();
			step(-1);
		}
	}
</script>

<svelte:window onkeydown={handleKey} />

<section id="karya" class="border-b border-line">
	<div class="mx-auto max-w-[1440px] px-6 py-14 lg:px-24 lg:py-24">
		<SectionHeader
			index="01"
			label={c.sections.work.label}
			title={c.sections.work.title}
			description={c.sections.work.description}
		/>

		<div class="mt-8 flex flex-wrap items-center justify-between gap-4" use:reveal>
			<div
				class="flex flex-wrap items-center gap-2"
				role="group"
				aria-label={c.sections.work.label}
			>
				{#each filters as filter (filter)}
					<button
						type="button"
						onclick={() => {
							active = filter;
							selected = 0;
						}}
						aria-pressed={active === filter}
						class="flex items-center gap-2 border px-3 py-2 font-mono text-[10.5px] tracking-[1.1px] uppercase transition-colors duration-200 {active ===
						filter
							? 'border-ink bg-ink text-bg'
							: 'border-line text-muted hover:border-ink hover:text-ink'}"
					>
						{c.sections.work.filters[filter]}
						<span class="text-[9.5px] opacity-60">({count(filter)})</span>
					</button>
				{/each}
			</div>

			<p class="font-mono text-[10.5px] tracking-[1.2px] text-muted uppercase">
				{String(filtered.length).padStart(2, '0')} / {String(c.works.length).padStart(2, '0')}
			</p>
		</div>

		<div class="mt-7 columns-1 gap-5 md:columns-2 lg:mt-10 lg:columns-3">
			{#each filtered as work, index (work.slug)}
				<WorkCard {work} {index} onselect={openWork} />
			{/each}
		</div>
	</div>
</section>

<Modal bind:open label={current.title} panelClass="w-[min(1000px,calc(100vw-2rem))] max-h-[88dvh]">
	{#if current}
		{#key current.slug}
			<div
				class="p-6 pb-5 sm:p-8 sm:pb-6"
				in:fade={{ duration: prefersReducedMotion.current ? 0 : 180 }}
			>
				<div
					class="flex flex-wrap items-center gap-x-3 gap-y-1 pr-12 font-mono text-[10.5px] tracking-[1.2px] text-muted uppercase"
				>
					<span class="flex items-center gap-1.5">
						<span class="h-1.5 w-1.5 rounded-full {dots[current.category]}"></span>
						{c.ui.categoryLabels[current.category]}
					</span>
					<span class="text-line">/</span>
					<span>{current.year}</span>
					<span class="text-line">/</span>
					<span>{current.meta}</span>
				</div>

				<h2
					class="mt-4 max-w-[720px] text-[28px] leading-[1.05] font-medium tracking-[-0.8px] sm:text-[40px] sm:tracking-[-1.2px]"
				>
					{current.title}
				</h2>
				<p class="mt-3 max-w-[640px] text-[15px] leading-[1.6] text-muted">
					{current.summary}
				</p>
			</div>
		{/key}
	{/if}

	<div class="border-y border-line bg-surface/40">
		<div class={current.category === 'poster' ? 'mx-auto w-full max-w-[420px] p-4' : ''}>
			<MediaFrame
				src={current.cover}
				alt={current.title}
				ratio={current.aspectRatio ?? modalRatio[current.category]}
				label={current.title}
				eager
			/>
		</div>
	</div>

	<div class="grid gap-6 p-6 sm:grid-cols-3 sm:p-8">
		{#each [{ label: c.ui.problem, text: current.problem }, { label: c.ui.solution, text: current.solution }, { label: c.ui.result, text: current.result }] as block, index (index)}
			<div class="flex flex-col gap-2 border-t border-line pt-3">
				<span class="font-mono text-[10px] tracking-[1.3px] text-muted uppercase">
					{block.label}
				</span>
				<p class="text-[14px] leading-[1.6]">{block.text}</p>
			</div>
		{/each}
	</div>

	<div class="grid gap-8 border-t border-line p-6 sm:p-8 lg:grid-cols-2">
		<div class="flex flex-col gap-5">
			<div>
				<p class="font-mono text-[10px] tracking-[1.3px] text-muted uppercase">
					{c.ui.highlights}
				</p>
				<ul class="mt-3 flex flex-col gap-2.5">
					{#each current.highlights as highlight (highlight)}
						<li class="flex items-start gap-2.5 text-[14px] leading-[1.5]">
							<Icon name="check" size={15} class="mt-0.5 shrink-0 text-primary" />
							{highlight}
						</li>
					{/each}
				</ul>
			</div>

			<div class="flex flex-wrap gap-1.5">
				{#each current.tools as tool (tool)}
					<span
						class="border border-line px-2 py-1 font-mono text-[10px] tracking-[0.8px] text-muted uppercase"
					>
						{tool}
					</span>
				{/each}
			</div>
		</div>

		<dl class="grid grid-cols-2 content-start gap-x-6 gap-y-5">
			<div>
				<dt class="font-mono text-[10px] tracking-[1.3px] text-muted uppercase">{c.ui.role}</dt>
				<dd class="mt-1 text-[14px]">{current.role}</dd>
			</div>
			<div>
				<dt class="font-mono text-[10px] tracking-[1.3px] text-muted uppercase">{c.ui.year}</dt>
				<dd class="mt-1 text-[14px]">{current.year}</dd>
			</div>
			<div class="col-span-2">
				<dt class="font-mono text-[10px] tracking-[1.3px] text-muted uppercase">{c.ui.tools}</dt>
				<dd class="mt-1 text-[14px]">{current.tools.join(' · ')}</dd>
			</div>

			<div class="col-span-2 flex flex-wrap gap-2 pt-1">
				{#each current.links as link (link.label)}
					{#if link.href}
						<a
							href={link.href}
							target="_blank"
							rel="external noreferrer"
							class="group flex h-10 items-center gap-2 bg-primary px-4 text-[13px] font-medium text-on-primary"
						>
							{link.label}
							<Icon
								name="arrow-up-right"
								size={14}
								class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
							/>
						</a>
					{:else}
						<span
							class="flex h-10 items-center gap-2 border border-dashed border-line px-4 text-[13px] text-muted"
						>
							{link.label}
							<span class="font-mono text-[10px] tracking-[1px] uppercase">
								· {c.ui.comingSoon}
							</span>
						</span>
					{/if}
				{/each}
			</div>
		</dl>
	</div>

	<div
		class="flex flex-col gap-4 border-t border-line p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
	>
		<button
			type="button"
			onclick={() => step(-1)}
			disabled={filtered.length < 2}
			class="group flex items-center gap-3 text-left disabled:cursor-not-allowed disabled:opacity-40"
		>
			<span
				class="flex h-10 w-10 shrink-0 items-center justify-center border border-line transition-colors group-hover:bg-surface"
			>
				<Icon name="arrow-left" size={15} />
			</span>
			<span class="flex flex-col">
				<span class="font-mono text-[9.5px] tracking-[1.2px] text-muted uppercase">
					{c.ui.previous}
				</span>
				<span class="text-[13.5px]">{previousWork?.title ?? '—'}</span>
			</span>
		</button>

		<span class="hidden font-mono text-[10.5px] tracking-[1.2px] text-muted sm:block">
			{String(selected + 1).padStart(2, '0')} / {String(filtered.length).padStart(2, '0')}
		</span>

		<button
			type="button"
			onclick={() => step(1)}
			disabled={filtered.length < 2}
			class="group flex items-center gap-3 text-left disabled:cursor-not-allowed disabled:opacity-40 sm:flex-row-reverse sm:text-right"
		>
			<span
				class="flex h-10 w-10 shrink-0 items-center justify-center border border-line transition-colors group-hover:bg-surface"
			>
				<Icon name="arrow-right" size={15} />
			</span>
			<span class="flex flex-col">
				<span class="font-mono text-[9.5px] tracking-[1.2px] text-muted uppercase">
					{c.ui.next}
				</span>
				<span class="text-[13.5px]">{nextWork?.title ?? '—'}</span>
			</span>
		</button>
	</div>
</Modal>
