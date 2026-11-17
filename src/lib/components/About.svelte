<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';
	import { reveal } from '$lib/actions/reveal';
	import MediaFrame from './ui/MediaFrame.svelte';
	import SectionHeader from './ui/SectionHeader.svelte';

	const c = $derived(i18n.content);
</script>

<section id="tentang" class="border-b border-line">
	<div class="mx-auto max-w-[1440px] px-6 py-14 lg:px-24 lg:py-24">
		<SectionHeader index="04" label={c.sections.about.label} title={c.sections.about.title} />

		<div class="mt-8 grid gap-8 lg:mt-12 lg:grid-cols-12 lg:gap-16">
			<div class="lg:col-span-4" use:reveal>
				<div class="group relative">
					<MediaFrame
						src="/images/art/portrait.svg"
						alt={c.sections.about.portraitAlt}
						ratio="4/5"
						label={c.hero.name}
						eager
					/>
					<span
						class="absolute bottom-0 left-0 border-t border-r border-line bg-bg px-3 py-2 font-mono text-[9.5px] tracking-[1.3px] text-muted uppercase"
					>
						{c.sections.about.label} — 2026
					</span>
				</div>

				<div class="mt-4 flex flex-col gap-2.5">
					<p class="font-mono text-[9.5px] tracking-[1.2px] text-muted uppercase">
						{c.sections.about.learningLabel}
					</p>
					<div class="flex flex-wrap gap-1.5">
						{#each c.sections.about.learning as item (item)}
							<span
								class="flex items-center gap-1.5 border border-line px-2.5 py-1.5 font-mono text-[10px] tracking-[0.8px] text-muted uppercase"
							>
								<span class="h-1 w-1 rounded-full bg-accent-poster"></span>
								{item}
							</span>
						{/each}
					</div>
				</div>
			</div>

			<div class="flex flex-col gap-7 lg:col-span-7 lg:col-start-6">
				{#each c.sections.about.bio as paragraph, index (index)}
					<p
						class="max-w-[560px] text-[17px] leading-[1.65] text-muted lg:text-[19px]"
						use:reveal={{ delay: index }}
					>
						{paragraph}
					</p>
				{/each}

				<dl class="flex flex-col divide-y divide-line border-t border-line" use:reveal>
					{#each c.sections.about.facts as fact (fact.label)}
						<div class="group flex items-baseline justify-between gap-6 py-4">
							<dt class="font-mono text-[10px] tracking-[1.3px] text-muted uppercase">
								{fact.label}
							</dt>
							<dd class="text-right text-[14px]">{fact.value}</dd>
						</div>
					{/each}
				</dl>
			</div>
		</div>

		<div class="mt-14 border-t border-line pt-8 lg:mt-20 lg:pt-10">
			<div class="grid gap-3 lg:grid-cols-12 lg:items-end" use:reveal>
				<div class="lg:col-span-7">
					<p class="font-mono text-[10.5px] tracking-[1.3px] text-muted uppercase">
						<span class="text-ink">04.1</span>
						<span class="mx-2 text-line">/</span>
						{c.sections.timeline.label}
					</p>
					<h3 class="mt-3 text-[26px] leading-tight font-medium tracking-[-0.6px] lg:text-[34px]">
						{c.sections.timeline.title}
					</h3>
				</div>
				<p class="max-w-[420px] text-[14px] leading-[1.6] text-muted lg:col-span-5">
					{c.sections.timeline.description}
				</p>
			</div>

			<ol class="mt-8 flex flex-col">
				{#each c.experience as item, index (item.year + item.title)}
					<li
						class="timeline-row group grid gap-2 border-t border-line py-6 sm:grid-cols-12 sm:gap-6"
						use:reveal={{ delay: index }}
					>
						<div class="flex items-center gap-3 sm:col-span-2">
							<span
								class="h-1.5 w-1.5 rounded-full bg-line transition-colors duration-300 group-hover:bg-primary"
								aria-hidden="true"
							></span>
							<span class="font-mono text-[11.5px] tracking-[1.2px] text-muted">
								{item.year}
							</span>
						</div>

						<div class="sm:col-span-5">
							<h4 class="text-[17px] leading-snug font-medium tracking-[-0.2px]">
								{item.title}
							</h4>
							<p class="mt-1 font-mono text-[9.5px] tracking-[1.1px] text-muted uppercase">
								{item.org}
							</p>
						</div>

						<p class="text-[13.5px] leading-[1.6] text-muted sm:col-span-5">
							{item.description}
						</p>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>
