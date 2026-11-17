<script lang="ts">
	import type { Category, Work } from '$lib/content/types';
	import { i18n } from '$lib/i18n.svelte';
	import { reveal } from '$lib/actions/reveal';
	import Icon from './ui/Icon.svelte';
	import MediaFrame from './ui/MediaFrame.svelte';

	type Ratio = '3/2' | '16/9' | '4/5' | '1/1' | '4/3' | 'auto';

	type Props = {
		work: Work;
		index: number;
		onselect: (work: Work) => void;
	};

	let { work, index, onselect }: Props = $props();

	const c = $derived(i18n.content);
	const ratio: Record<Category, Ratio> = {
		web: 'auto',
		photo: 'auto',
		poster: 'auto'
	};
	const dots: Record<Category, string> = {
		web: 'bg-accent-web',
		photo: 'bg-accent-photo',
		poster: 'bg-accent-poster'
	};
</script>

<article
	class="card group relative mb-5 break-inside-avoid"
	use:reveal={{ delay: index }}
	style="--accent: var(--accent-{work.category})"
>
	<div
		class="card-frame relative overflow-hidden border border-line bg-surface transition-colors duration-300"
	>
		<MediaFrame src={work.cover} alt={work.title} ratio={work.aspectRatio ?? ratio[work.category]} label={work.title} />

		<div
			class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
		></div>

		<span
			class="absolute top-3 left-3 flex items-center gap-1.5 border border-white/20 bg-black/40 px-2 py-1 font-mono text-[10px] tracking-[1.1px] text-white uppercase backdrop-blur-sm"
		>
			<span class="h-1.5 w-1.5 rounded-full {dots[work.category]}"></span>
			{c.ui.categoryLabels[work.category]}
		</span>

		<span
			class="absolute bottom-3 left-3 flex translate-y-1 items-center gap-2 font-mono text-[10px] tracking-[1.2px] text-white uppercase opacity-0 transition-all duration-300 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100"
		>
			{c.ui.viewDetail}
			<Icon name="arrow-up-right" size={12} />
		</span>
	</div>

	<div class="mt-3 flex items-baseline justify-between gap-4 border-b border-line pb-2.5">
		<h3
			class="text-[20px] leading-[1.2] font-medium tracking-[-0.3px] transition-colors duration-300 group-hover:text-[var(--accent)]"
		>
			{work.title}
		</h3>
		<span class="shrink-0 font-mono text-[11px] text-muted">{work.year}</span>
	</div>

	<p class="mt-2 line-clamp-2 text-[14px] leading-[1.55] text-muted">{work.summary}</p>

	<div class="mt-3 flex flex-wrap gap-1.5">
		{#each work.tools.slice(0, 3) as tool (tool)}
			<span
				class="border border-line px-1.5 py-1 font-mono text-[10px] tracking-[0.8px] text-muted uppercase"
			>
				{tool}
			</span>
		{/each}
		{#if work.tools.length > 3}
			<span class="px-1 py-1 font-mono text-[10px] text-muted">+{work.tools.length - 3}</span>
		{/if}
	</div>

	<button
		type="button"
		class="absolute inset-0 z-10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
		onclick={() => onselect(work)}
		aria-haspopup="dialog"
		aria-label="{c.ui.viewDetail}: {work.title}"
	></button>
</article>

<style>
	.card:hover .card-frame,
	.card:focus-within .card-frame {
		border-color: var(--accent);
	}
</style>
