<script lang="ts">
	import { iconPaths, type IconName } from './icons';

	type Props = {
		name: IconName;
		size?: number;
		strokeWidth?: number;
		class?: string;
	};

	let { name, size = 18, strokeWidth = 1.5, class: className = '' }: Props = $props();

	const paths = $derived(iconPaths[name]);
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width={strokeWidth}
	stroke-linecap="round"
	stroke-linejoin="round"
	class={className}
	aria-hidden="true"
	focusable="false"
>
	{#each paths as d, i (i)}
		<path {d} />
	{/each}
</svg>
