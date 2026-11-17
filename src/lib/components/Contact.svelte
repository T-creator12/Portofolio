<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';
	import { reveal } from '$lib/actions/reveal';
	import Icon from './ui/Icon.svelte';
	import type { IconName } from './ui/icons';
	import SectionHeader from './ui/SectionHeader.svelte';

	const c = $derived(i18n.content);
	const copy = $derived(c.sections.contact);
	const form = $derived(copy.form);

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let company = $state('');
	let touched = $state(false);
	let status = $state<'idle' | 'sending' | 'success' | 'error'>('idle');
	let serverError = $state('');

	const nameError = $derived(touched && name.trim().length < 2);
	const emailError = $derived(touched && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim()));
	const messageError = $derived(touched && message.trim().length < 10);
	const hasError = $derived(nameError || emailError || messageError);

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

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		touched = true;

		if (hasError) return;

		// Honeypot: bots fill hidden fields, humans do not.
		if (company.length > 0) {
			status = 'success';
			return;
		}

		status = 'sending';
		serverError = '';

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name: name.trim(),
					email: email.trim(),
					message: message.trim()
				})
			});

			const data = await res.json();

			if (!res.ok) {
				status = 'error';
				serverError = data?.error || 'Gagal mengirim pesan. Silakan coba lagi.';
			} else {
				status = 'success';
				name = '';
				email = '';
				message = '';
				touched = false;
			}
		} catch {
			status = 'error';
			serverError = 'Terjadi gangguan koneksi internet. Silakan coba lagi.';
		}
	}
</script>

<section id="kontak" class="border-b border-line">
	<div class="mx-auto max-w-[1440px] px-6 py-14 lg:px-24 lg:py-24">
		<SectionHeader
			index="05"
			label={copy.label}
			title={copy.title}
			description={copy.description}
		/>

		<div class="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:gap-16">
			<div class="flex flex-col gap-8 lg:col-span-5" use:reveal>
				<div>
					<p class="font-mono text-[10px] tracking-[1.3px] text-muted uppercase">
						{copy.emailLabel}
					</p>
					<a
						href={`mailto:${c.contact.email}`}
						class="group mt-2 inline-flex items-baseline gap-2 border-b border-line pb-1 text-[20px] font-medium tracking-[-0.3px] transition-colors hover:border-primary hover:text-primary sm:text-[24px]"
					>
						{c.contact.email}
						<Icon
							name="arrow-up-right"
							size={16}
							class="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						/>
					</a>
					<p class="mt-3 font-mono text-[10px] tracking-[1.1px] text-muted uppercase">
						{copy.responseNote}
					</p>
				</div>

				<div>
					<p class="font-mono text-[10px] tracking-[1.3px] text-muted uppercase">
						{copy.socialLabel}
					</p>
					<ul class="mt-3 flex flex-col divide-y divide-line border-t border-line">
						{#each c.contact.socials as social (social.label)}
							<li>
								{#if social.href}
									<a
										href={social.href}
										target="_blank"
										rel="external noreferrer"
										class="group flex items-center justify-between gap-4 py-3"
									>
										<span class="flex items-center gap-3 text-[14px]">
											<Icon name={socialIcon(social.label)} size={15} class="text-muted" />
											{social.label}
										</span>
										<span
											class="font-mono text-[10.5px] tracking-[0.8px] text-muted transition-colors group-hover:text-primary"
										>
											{social.handle}
										</span>
									</a>
								{:else}
									<div class="flex items-center justify-between gap-4 py-3">
										<span class="flex items-center gap-3 text-[14px] text-muted">
											<Icon name={socialIcon(social.label)} size={15} />
											{social.label}
										</span>
										<span
											class="flex items-center gap-2 font-mono text-[9.5px] tracking-[1px] text-muted uppercase"
										>
											<span class="h-1 w-1 rounded-full bg-line"></span>
											{c.ui.comingSoon}
										</span>
									</div>
								{/if}
							</li>
						{/each}
					</ul>
				</div>
			</div>

			<div class="lg:col-span-7" use:reveal={{ delay: 1 }}>
				<form
					class="flex flex-col gap-5 border border-line bg-bg p-5 sm:p-7"
					onsubmit={handleSubmit}
					novalidate
				>
					<div class="grid gap-5 sm:grid-cols-2">
						<label class="flex flex-col gap-2">
							<span class="font-mono text-[10px] tracking-[1.2px] text-muted uppercase">
								{form.name}
							</span>
							<input
								type="text"
								bind:value={name}
								placeholder={form.namePlaceholder}
								autocomplete="name"
								aria-invalid={nameError}
								class="h-11 border bg-transparent px-3 text-[14px] transition-colors placeholder:text-muted/60 {nameError
									? 'border-danger'
									: 'border-line focus:border-primary'}"
							/>
							{#if nameError}
								<span class="text-[11px] text-danger">{form.required}</span>
							{/if}
						</label>

						<label class="flex flex-col gap-2">
							<span class="font-mono text-[10px] tracking-[1.2px] text-muted uppercase">
								{form.email}
							</span>
							<input
								type="email"
								bind:value={email}
								placeholder={form.emailPlaceholder}
								autocomplete="email"
								aria-invalid={emailError}
								class="h-11 border bg-transparent px-3 text-[14px] transition-colors placeholder:text-muted/60 {emailError
									? 'border-danger'
									: 'border-line focus:border-primary'}"
							/>
							{#if emailError}
								<span class="text-[11px] text-danger">{form.invalidEmail}</span>
							{/if}
						</label>
					</div>

					<label class="flex flex-col gap-2">
						<span class="font-mono text-[10px] tracking-[1.2px] text-muted uppercase">
							{form.message}
						</span>
						<textarea
							bind:value={message}
							rows="5"
							placeholder={form.messagePlaceholder}
							aria-invalid={messageError}
							class="resize-y border bg-transparent px-3 py-3 text-[14px] leading-[1.55] transition-colors placeholder:text-muted/60 {messageError
								? 'border-danger'
								: 'border-line focus:border-primary'}"></textarea>
						{#if messageError}
							<span class="text-[11px] text-danger">{form.required}</span>
						{/if}
					</label>

					<input
						type="text"
						bind:value={company}
						tabindex="-1"
						autocomplete="off"
						aria-hidden="true"
						class="hidden"
					/>

					<div class="flex flex-wrap items-end justify-between gap-4">
						<p
							class="max-w-[300px] font-mono text-[9.5px] leading-relaxed tracking-[0.3px] text-muted"
						>
							{form.note}
						</p>

						<button
							type="submit"
							disabled={status === 'sending'}
							class="group flex h-11 items-center gap-2.5 bg-primary px-5 text-[13.5px] font-medium text-on-primary transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70"
						>
							{status === 'sending' ? form.sending : form.submit}
							<Icon
								name="arrow-up-right"
								size={15}
								class="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
							/>
						</button>
					</div>

					{#if touched && hasError}
						<p role="alert" class="text-[12px] text-danger">{form.invalid}</p>
					{/if}

					{#if status === 'error'}
						<p
							role="alert"
							class="flex items-start gap-2.5 border border-danger/50 px-3 py-2.5 text-[12.5px] leading-[1.5] text-danger"
						>
							<Icon name="close" size={15} strokeWidth={2} class="mt-0.5 shrink-0" />
							{serverError || form.invalid}
						</p>
					{/if}

					{#if status === 'success'}
						<p
							role="status"
							class="flex items-start gap-2.5 border border-success/50 px-3 py-2.5 text-[12.5px] leading-[1.5] text-success"
						>
							<Icon name="check" size={15} strokeWidth={2} class="mt-0.5 shrink-0" />
							{form.success}
						</p>
					{/if}
				</form>
			</div>
		</div>
	</div>
</section>
