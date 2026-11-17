<script lang="ts">
	import { browser } from '$app/env';
	import type { Snippet } from 'svelte';
	import { i18n } from '$lib/i18n.svelte';
	import Icon from './Icon.svelte';

	type Props = {
		open?: boolean;
		label: string;
		children: Snippet;
		panelClass?: string;
		showClose?: boolean;
	};

	let {
		open = $bindable(false),
		label,
		children,
		panelClass = 'w-[min(920px,calc(100vw-2rem))] max-h-[88dvh]',
		showClose = true
	}: Props = $props();

	let dialog = $state<HTMLDialogElement>();
	const closeLabel = $derived(i18n.content.ui.close);

	$effect(() => {
		if (!dialog) return;

		if (open && !dialog.open) {
			dialog.showModal();
		} else if (!open && dialog.open) {
			dialog.close();
		}
	});

	$effect(() => {
		if (!browser || !open) return;

		const previous = document.documentElement.style.overflow;
		document.documentElement.style.overflow = 'hidden';

		return () => {
			document.documentElement.style.overflow = previous;
		};
	});

	function handleClick(event: MouseEvent) {
		if (event.target === dialog) open = false;
	}

	function handleClose() {
		open = false;
	}
</script>

<dialog
	bind:this={dialog}
	class="modal"
	aria-label={label}
	onclose={handleClose}
	onclick={handleClick}
>
	<div
		class="modal-panel relative overflow-y-auto overscroll-contain border border-line bg-bg text-ink shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)] {panelClass}"
	>
		{#if showClose}
			<button
				type="button"
				onclick={() => (open = false)}
				aria-label={closeLabel}
				class="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center border border-line bg-bg/90 backdrop-blur-sm transition-colors hover:bg-surface"
			>
				<Icon name="close" size={16} />
			</button>
		{/if}

		{@render children()}
	</div>
</dialog>
