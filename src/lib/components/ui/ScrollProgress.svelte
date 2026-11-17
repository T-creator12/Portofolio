<script lang="ts">
	import { onMount } from 'svelte';

	let progress = $state(0);

	function update() {
		const max = document.documentElement.scrollHeight - window.innerHeight;
		progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
	}

	onMount(update);
</script>

<svelte:window onscroll={update} onresize={update} />

<div class="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[2px]" aria-hidden="true">
	<div
		class="h-full origin-left bg-primary transition-transform duration-150 ease-out"
		style="transform: scaleX({progress})"
	></div>
</div>
