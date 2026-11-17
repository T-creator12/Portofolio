<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	type Props = {
		index: string;
		label: string;
		title: string;
		description?: string;
	};

	let { index, label, title, description }: Props = $props();
</script>

<div class="flex flex-col gap-6" use:reveal>
	<div class="flex items-center justify-between gap-4 border-t border-line pt-3">
		<p class="font-mono text-[10.5px] tracking-[1.4px] text-muted uppercase">
			<span class="text-ink">{index}</span>
			<span class="mx-2 text-line">/</span>
			{label}
		</p>
		<span class="hidden font-mono text-[10.5px] tracking-[1.4px] text-muted uppercase sm:block">
			{index} — {label}
		</span>
	</div>

	<div class="grid gap-4 lg:grid-cols-12 lg:items-end lg:gap-8">
		<h2
			class="text-[32px] leading-[1.03] font-medium tracking-[-0.9px] text-balance sm:text-[40px] lg:col-span-7 lg:text-[54px] lg:tracking-[-1.8px]"
		>
			{title}
		</h2>

		{#if description}
			<p class="max-w-[540px] text-[15px] leading-[1.6] text-muted lg:col-span-5 lg:text-base">
				{description}
			</p>
		{/if}
	</div>
</div>
