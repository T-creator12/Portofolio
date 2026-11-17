<script lang="ts">
	import type { Skill } from '$lib/content/types';
	import { i18n } from '$lib/i18n.svelte';
	import { reveal } from '$lib/actions/reveal';
	import SectionHeader from './ui/SectionHeader.svelte';

	const c = $derived(i18n.content);
	const steps = [1, 2, 3, 4, 5] as const;

	function levelLabel(skill: Skill) {
		return c.sections.skills.levelLabels[skill.level - 1];
	}
</script>

<section id="keahlian" class="border-b border-line">
	<div class="mx-auto max-w-[1440px] px-6 py-14 lg:px-24 lg:py-24">
		<SectionHeader
			index="02"
			label={c.sections.skills.label}
			title={c.sections.skills.title}
			description={c.sections.skills.description}
		/>

		<div class="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2" use:reveal>
			<span class="flex items-center gap-1" aria-hidden="true">
				{#each steps as step (step)}
					<span class="h-[3px] w-5" style="background: {step <= 3 ? 'var(--ink)' : 'var(--line)'}"
					></span>
				{/each}
			</span>
			<span class="font-mono text-[10px] tracking-[1.2px] text-muted uppercase">
				{c.sections.skills.levelLegend}
			</span>
			<span class="hidden font-mono text-[10px] tracking-[1.2px] text-muted uppercase sm:inline">
				· {c.sections.skills.levelLabels.join(' / ')}
			</span>
		</div>

		<div class="mt-7 grid gap-4 md:grid-cols-2 lg:mt-10 lg:grid-cols-3">
			{#each c.skillGroups as group, index (group.id)}
				<article
					class="skill-card group relative flex flex-col gap-5 overflow-hidden border border-line bg-bg p-5 transition-colors duration-300 sm:p-6 {index ===
						0 || index === 3
						? 'lg:col-span-2'
						: ''}"
					use:reveal={{ delay: index }}
					style="--accent: var(--accent-{group.accent})"
				>
					<span
						class="absolute top-0 left-0 h-[2px] w-10 transition-all duration-500 group-hover:w-24"
						style="background: var(--accent)"
						aria-hidden="true"
					></span>

					<div class="flex items-start justify-between gap-4">
						<div class="flex flex-col gap-1.5">
							<p class="font-mono text-[10px] tracking-[1.3px] text-muted uppercase">
								<span style="color: var(--accent)">{group.index}</span>
								<span class="mx-2 text-line">/</span>
								{group.label}
							</p>
							<h3 class="text-[22px] leading-tight font-medium tracking-[-0.4px]">
								{group.title}
							</h3>
						</div>

						{#if group.featured}
							<span
								class="shrink-0 border px-2 py-1 font-mono text-[9.5px] tracking-[1.1px] uppercase"
								style="border-color: var(--accent); color: var(--accent)"
							>
								{group.label}
							</span>
						{/if}
					</div>

					<p class="max-w-[46ch] text-[13.5px] leading-[1.55] text-muted">
						{group.description}
					</p>

					{#if group.featured}
						<ul class="flex flex-wrap gap-1.5">
							{#each group.skills as skill (skill.name)}
								<li
									class="flex items-center gap-2 border border-line px-2.5 py-1.5 transition-colors hover:border-[var(--accent)]"
								>
									<span class="text-[12.5px]">{skill.name}</span>
									<span class="flex gap-[3px]" aria-hidden="true">
										{#each steps as step (step)}
											<span
												class="h-[3px] w-2.5"
												style="background: {step <= skill.level ? 'var(--accent)' : 'var(--line)'}"
											></span>
										{/each}
									</span>
									<span class="sr-only">{levelLabel(skill)}</span>
								</li>
							{/each}
						</ul>
					{:else}
						<ul class="flex flex-col divide-y divide-line">
							{#each group.skills as skill (skill.name)}
								<li class="flex items-center justify-between gap-4 py-2.5">
									<span class="text-[13.5px]">{skill.name}</span>
									<span class="flex items-center gap-2.5">
										<span class="flex gap-1" aria-hidden="true">
											{#each steps as step (step)}
												<span
													class="h-[3px] w-3"
													style="background: {step <= skill.level
														? 'var(--accent)'
														: 'var(--line)'}"
												></span>
											{/each}
										</span>
										<span
											class="w-[52px] text-right font-mono text-[9.5px] tracking-[0.8px] text-muted uppercase"
										>
											{levelLabel(skill)}
										</span>
									</span>
								</li>
							{/each}
						</ul>
					{/if}
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.skill-card:hover {
		border-color: var(--accent);
	}
</style>
