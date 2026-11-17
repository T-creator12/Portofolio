<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';
	import Icon from './ui/Icon.svelte';
	import RoleRotator from './RoleRotator.svelte';

	const c = $derived(i18n.content);
</script>

<section id="atas" class="relative overflow-hidden border-b border-line">
	<div
		class="grid-fade pointer-events-none absolute inset-x-0 top-0 h-[620px] opacity-70"
		aria-hidden="true"
	></div>

	<div class="relative mx-auto max-w-[1440px] px-6 pt-14 lg:px-24 lg:pt-20">
		<div class="rise flex flex-wrap items-center justify-between gap-3" style="--rise-delay: 0">
			<p
				class="flex items-center gap-2.5 font-mono text-[10.5px] tracking-[1.4px] text-muted uppercase"
			>
				<span class="relative flex h-2 w-2" aria-hidden="true">
					<span
						class="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60"
					></span>
					<span class="relative inline-flex h-2 w-2 rounded-full bg-success"></span>
				</span>
				{c.hero.availability}
			</p>

			<RoleRotator roles={c.hero.roles} />
		</div>

		<h1
			class="rise mt-6 text-[clamp(3.4rem,13.2vw,12.5rem)] leading-[0.82] font-medium tracking-[-0.045em] text-balance"
			style="--rise-delay: 1"
		>
			{c.hero.name}
		</h1>

		<div
			class="rise mt-8 grid gap-8 border-t border-line pt-7 lg:mt-12 lg:grid-cols-12 lg:gap-12 lg:pt-8"
			style="--rise-delay: 2"
		>
			<p class="max-w-[560px] text-[17px] leading-[1.6] text-muted lg:col-span-6 lg:text-xl">
				{c.hero.intro}
			</p>

			<div class="flex flex-col gap-5 lg:col-span-5 lg:col-start-8">
				<div class="flex flex-wrap items-center gap-3">
					<a
						href="#karya"
						class="group flex h-12 items-center gap-3 bg-primary px-5 text-[15px] font-medium text-on-primary transition-transform duration-300 hover:-translate-y-0.5"
					>
						{c.hero.primaryCta}
						<Icon
							name="arrow-down"
							size={16}
							class="transition-transform duration-300 group-hover:translate-y-0.5"
						/>
					</a>

					<a
						href="#kontak"
						class="group flex h-12 items-center gap-3 border border-line px-5 text-[15px] transition-colors hover:bg-surface"
					>
						{c.hero.secondaryCta}
						<Icon
							name="arrow-up-right"
							size={16}
							class="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						/>
					</a>
				</div>

				<p class="font-mono text-[10.5px] tracking-[1.3px] text-muted uppercase">
					{c.hero.scrollHint} ↓
				</p>
			</div>
		</div>

		<dl
			class="rise mt-12 grid grid-cols-2 divide-y divide-line border-t border-line sm:grid-cols-4 sm:divide-x sm:divide-y-0 lg:mt-16"
			style="--rise-delay: 3"
		>
			{#each c.hero.stats as stat (stat.label)}
				<div class="flex flex-col gap-1.5 py-5 sm:px-6 sm:first:pl-0 sm:last:pr-0">
					<dt class="font-mono text-[10px] tracking-[1.2px] text-muted uppercase">
						{stat.label}
					</dt>
					<dd class="text-[30px] leading-none font-medium tracking-[-0.5px] lg:text-[40px]">
						{stat.value}
					</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>
