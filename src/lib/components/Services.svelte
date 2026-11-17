<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';
	import { reveal } from '$lib/actions/reveal';
	import Icon from './ui/Icon.svelte';
	import type { IconName } from './ui/icons';
	import SectionHeader from './ui/SectionHeader.svelte';

	const c = $derived(i18n.content);

	const serviceIcons: Record<string, IconName> = {
		frontend: 'code',
		photo: 'camera',
		poster: 'pen'
	};
</script>

<section id="layanan" class="border-b border-line bg-surface/30">
	<div class="mx-auto max-w-[1440px] px-6 py-14 lg:px-24 lg:py-24">
		<SectionHeader
			index="03"
			label={c.sections.services.label}
			title={c.sections.services.title}
			description={c.sections.services.description}
		/>

		<div class="mt-8 grid gap-4 lg:mt-12 lg:grid-cols-3">
			{#each c.services as service, index (service.id)}
				<article
					class="service-card group relative flex flex-col gap-4 border border-line bg-bg p-6 transition-colors duration-300"
					use:reveal={{ delay: index }}
					style="--accent: var(--accent-{service.accent})"
				>
					<div class="flex items-start justify-between gap-4">
						<span class="font-mono text-[10px] tracking-[1.3px] text-muted">
							{service.index}
						</span>
						<span
							class="flex h-10 w-10 items-center justify-center border border-line transition-transform duration-300 group-hover:-rotate-6"
							style="color: var(--accent)"
							aria-hidden="true"
						>
							<Icon name={serviceIcons[service.id] ?? 'spark'} size={18} />
						</span>
					</div>

					<h3 class="text-[23px] leading-[1.15] font-medium tracking-[-0.4px]">
						{service.title}
					</h3>

					<p class="text-[14px] leading-[1.6] text-muted">{service.description}</p>

					<div class="mt-auto border-t border-line pt-4">
						<p class="font-mono text-[10px] tracking-[1.2px] text-muted uppercase">
							{c.sections.services.deliverableLabel}
						</p>
						<ul class="mt-3 flex flex-col gap-2">
							{#each service.deliverables as deliverable (deliverable)}
								<li class="flex items-start gap-2 text-[13px] leading-snug">
									<Icon
										name="check"
										size={14}
										strokeWidth={2}
										class="mt-0.5 shrink-0 text-[var(--accent)]"
									/>
									{deliverable}
								</li>
							{/each}
						</ul>
					</div>
				</article>
			{/each}
		</div>

		<div class="mt-14 lg:mt-20">
			<div
				class="flex flex-col gap-4 border-t border-line pt-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12"
				use:reveal
			>
				<div>
					<p class="font-mono text-[10.5px] tracking-[1.3px] text-muted uppercase">
						<span class="text-ink">03.1</span>
						<span class="mx-2 text-line">/</span>
						{c.sections.process.label}
					</p>
					<h3 class="mt-3 text-[26px] leading-tight font-medium tracking-[-0.6px] lg:text-[34px]">
						{c.sections.process.title}
					</h3>
				</div>
				<p class="max-w-[420px] text-[14px] leading-[1.6] text-muted">
					{c.sections.process.description}
				</p>
			</div>

			<ol class="mt-9 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
				{#each c.process as step, index (step.index)}
					<li class="group relative border-t border-line pt-5" use:reveal={{ delay: index }}>
						<span
							class="font-mono text-[26px] leading-none text-line transition-colors duration-300 group-hover:text-primary"
						>
							{step.index}
						</span>
						<h4 class="mt-3 text-[16px] font-medium">{step.title}</h4>
						<p class="mt-2 text-[13.5px] leading-[1.55] text-muted">{step.description}</p>
						<span
							class="absolute -top-[3px] left-0 h-[5px] w-[5px] rounded-full bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							aria-hidden="true"
						></span>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>

<style>
	.service-card:hover {
		border-color: var(--accent);
	}
</style>
