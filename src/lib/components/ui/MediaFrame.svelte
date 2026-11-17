<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';

	type Ratio = '3/2' | '16/9' | '4/5' | '1/1' | '4/3' | 'auto';

	type Props = {
		src?: string;
		alt: string;
		ratio?: Ratio;
		fit?: 'cover' | 'contain';
		class?: string;
		eager?: boolean;
		label?: string;
	};

	let {
		src,
		alt,
		ratio = '3/2',
		fit = 'cover',
		class: className = '',
		eager = false,
		label
	}: Props = $props();

	let failed = $state(false);

	const ratioClass: Record<Ratio, string> = {
		'3/2': 'aspect-[3/2]',
		'16/9': 'aspect-video',
		'4/5': 'aspect-[4/5]',
		'1/1': 'aspect-square',
		'4/3': 'aspect-[4/3]',
		auto: ''
	};

	const fitClass = $derived(fit === 'contain' ? 'object-contain' : 'object-cover');
	const unavailable = $derived(i18n.content.ui.imageUnavailable);
	const fallbackLabel = $derived(label ?? alt);
</script>

<div class="relative overflow-hidden bg-surface {ratioClass[ratio]} {className}">
	{#if src && !failed}
		<img
			{src}
			{alt}
			class="h-full w-full {fitClass} transition-transform duration-700 ease-out group-hover:scale-[1.035]"
			loading={eager ? 'eager' : 'lazy'}
			decoding="async"
			fetchpriority={eager ? 'high' : 'auto'}
			onerror={() => (failed = true)}
		/>
	{:else}
		<div
			class="flex h-full w-full flex-col items-center justify-center gap-2 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--primary)_10%,var(--surface)),var(--surface)_60%)] p-6 text-center"
		>
			<span class="font-mono text-[10px] tracking-[1.4px] text-muted uppercase">
				{unavailable}
			</span>
			<span class="max-w-[85%] text-[15px] leading-snug font-medium text-muted">
				{fallbackLabel}
			</span>
		</div>
	{/if}
</div>
