<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';
	import { reveal } from '$lib/actions/reveal';
	import Icon from './ui/Icon.svelte';
	import type { IconName } from './ui/icons';

	const c = $derived(i18n.content);
	const year = 2026;

	function socialIcon(label: string): IconName {
		switch (label.toLowerCase()) {
			case 'github':
				return 'github';
			case 'instagram':
				return 'instagram';
			case 'linkedin':
				return 'linkedin';
			case 'youtube':
				return 'youtube';
			default:
				return 'mail';
		}
	}

	function toTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<footer class="border-t border-line bg-surface/30">
	<div class="mx-auto max-w-[1440px] px-6 py-14 lg:px-24 lg:py-20">
		<div class="flex flex-col gap-10" use:reveal>
			<div class="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
				<div class="lg:col-span-8">
					<p class="font-mono text-[10.5px] tracking-[1.4px] text-muted uppercase">
						{c.sections.contact.label} — {year}
					</p>
					<h2
						class="mt-4 text-[clamp(2rem,6vw,3.75rem)] leading-[0.98] font-medium tracking-[-0.035em] text-balance"
					>
						{c.footer.cta}
					</h2>
				</div>

				<div class="flex flex-col gap-3 lg:col-span-4 lg:items-end">
					<a
						href={`mailto:${c.contact.email}`}
						class="group flex h-12 w-full items-center justify-center gap-2.5 bg-primary px-5 text-[14px] font-medium text-on-primary transition-transform duration-300 hover:-translate-y-0.5 lg:w-auto"
					>
						{c.contact.email}
						<Icon
							name="arrow-up-right"
							size={15}
							class="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						/>
					</a>
					<p class="font-mono text-[10px] tracking-[1.2px] text-muted uppercase">
						{c.sections.contact.responseNote}
					</p>
				</div>
			</div>

			<div
				class="flex flex-col gap-6 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between"
			>
				<ul class="flex flex-wrap items-center gap-x-5 gap-y-2">
					{#each c.contact.socials as social (social.label)}
						<li>
							{#if social.href}
								<a
									href={social.href}
									target="_blank"
									rel="external noreferrer"
									class="group flex items-center gap-2 font-mono text-[10.5px] tracking-[1.1px] text-muted uppercase transition-colors hover:text-primary"
								>
									<Icon name={socialIcon(social.label)} size={13} />
									{social.label}
								</a>
							{:else}
								<span
									class="flex items-center gap-2 font-mono text-[10.5px] tracking-[1.1px] text-muted uppercase"
								>
									<Icon name={socialIcon(social.label)} size={13} />
									{social.label}
									<span class="text-[9px] opacity-70">· {c.ui.comingSoon}</span>
								</span>
							{/if}
						</li>
					{/each}
				</ul>

				<button
					type="button"
					onclick={toTop}
					class="group flex items-center gap-2 self-start font-mono text-[10.5px] tracking-[1.1px] text-muted uppercase transition-colors hover:text-ink sm:self-auto"
				>
					<span
						class="flex h-9 w-9 items-center justify-center border border-line transition-colors group-hover:bg-bg"
					>
						<Icon name="arrow-up" size={14} />
					</span>
					{c.footer.backToTop}
				</button>
			</div>

			<div
				class="flex flex-col gap-3 border-t border-line pt-6 text-muted sm:flex-row sm:items-center sm:justify-between"
			>
				<p class="max-w-[560px] text-[11.5px] leading-relaxed">
					{c.footer.note}
				</p>
				<p class="font-mono text-[9.5px] tracking-[1.1px] uppercase">
					© {year}
					{c.hero.name} · {c.footer.builtWith}
				</p>
			</div>
		</div>
	</div>
</footer>
