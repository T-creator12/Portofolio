<script lang="ts">
	type Props = {
		items: string[];
	};

	let { items }: Props = $props();
</script>

<div class="marquee overflow-hidden border-y border-line bg-surface/50 py-3.5 select-none">
	<div class="marquee-track flex w-max items-center">
		{#each [0, 1] as copy (copy)}
			<div class="flex items-center" aria-hidden={copy === 1}>
				{#each items as item, i (i)}
					<span
						class="px-5 font-mono text-[11px] tracking-[1.6px] whitespace-nowrap text-muted uppercase"
					>
						{item}
					</span>
					<span class="text-[13px] text-accent-web" aria-hidden="true">✦</span>
				{/each}
			</div>
		{/each}
	</div>
</div>
