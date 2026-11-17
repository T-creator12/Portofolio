<script lang="ts">
	import { prefersReducedMotion } from 'svelte/motion';

	type Props = {
		roles: string[];
	};

	let { roles }: Props = $props();

	let index = $state(0);
	let deleting = $state(false);
	// Nilai awal hanya untuk render pertama; $effect di bawah menyinkronkan ulang.
	// svelte-ignore state_referenced_locally
	let text = $state(roles[0] ?? '');

	$effect(() => {
		const list = roles;
		const reduced = prefersReducedMotion.current;

		index = 0;
		deleting = false;
		text = list[0] ?? '';

		if (reduced || list.length <= 1) return;

		let cancelled = false;
		let timer: ReturnType<typeof setTimeout>;

		function tick() {
			if (cancelled) return;

			const full = list[index % list.length] ?? '';

			if (!deleting) {
				if (text.length < full.length) {
					text = full.slice(0, text.length + 1);
					timer = setTimeout(tick, 52);
				} else {
					timer = setTimeout(() => {
						deleting = true;
						tick();
					}, 1700);
				}
			} else if (text.length > 0) {
				text = text.slice(0, -1);
				timer = setTimeout(tick, 26);
			} else {
				deleting = false;
				index = (index + 1) % list.length;
				timer = setTimeout(tick, 300);
			}
		}

		timer = setTimeout(tick, 1500);

		return () => {
			cancelled = true;
			clearTimeout(timer);
		};
	});
</script>

<span
	class="flex items-center gap-2 font-mono text-[10.5px] tracking-[1.5px] uppercase sm:text-[11.5px]"
>
	<span class="text-muted" aria-hidden="true">[</span>
	<span class="sr-only">{roles.join(' · ')}</span>
	<span class="text-ink" aria-hidden="true">{text}</span>
	<span class="role-caret bg-primary" aria-hidden="true"></span>
	<span class="text-muted" aria-hidden="true">]</span>
</span>

<style>
	.role-caret {
		display: inline-block;
		width: 0.5ch;
		height: 1em;
		animation: caret-blink 1.1s steps(2, start) infinite;
	}

	@keyframes caret-blink {
		to {
			visibility: hidden;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.role-caret {
			animation: none;
		}
	}
</style>
