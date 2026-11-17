import { json } from '@sveltejs/kit';
import { RESEND_API_KEY, RESEND_TO } from '$app/env/private';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json();
		const name = String(body.name ?? '').trim();
		const email = String(body.email ?? '').trim();
		const message = String(body.message ?? '').trim();

		if (!name || !email || !message) {
			return json({ error: 'Semua kolom wajib diisi.' }, { status: 400 });
		}

		if (!email.includes('@')) {
			return json({ error: 'Format email tidak valid.' }, { status: 400 });
		}

		const apiKey = RESEND_API_KEY;
		const to = RESEND_TO || 'teofiluscharis@gmail.com';

		if (!apiKey) {
			console.error('RESEND_API_KEY belum disetel di .env');
			return json({ error: 'Kunci API Resend belum terpasang di .env' }, { status: 500 });
		}

		const response = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${apiKey}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				from: 'Portofolio <onboarding@resend.dev>',
				to: [to],
				reply_to: email,
				subject: `[Portofolio] Pesan dari ${name}`,
				html: `
					<div style="font-family: sans-serif; line-height: 1.6; color: #111; max-width: 600px; padding: 20px; border: 1px solid #e5e5e5; border-radius: 8px;">
						<h2 style="color: #1d3fd1; margin-top: 0; margin-bottom: 16px;">Pesan Baru dari Form Portofolio</h2>
						<p style="margin-bottom: 20px; color: #555;">Ada pengunjung yang mengirimkan pesan melalui portofolio Anda:</p>
						
						<div style="background: #f8f8f8; padding: 14px 18px; border-radius: 6px; margin-bottom: 20px;">
							<p style="margin: 6px 0;"><strong>Nama:</strong> ${name}</p>
							<p style="margin: 6px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #1d3fd1;">${email}</a></p>
						</div>

						<div style="border-left: 4px solid #1d3fd1; padding-left: 16px; margin-bottom: 24px;">
							<p style="font-weight: bold; margin-bottom: 6px; color: #333;">Isi Pesan:</p>
							<p style="white-space: pre-wrap; margin: 0; color: #222;">${message}</p>
						</div>

						<hr style="border: none; border-top: 1px solid #eee; margin: 24px 0 16px;" />
						<p style="font-size: 12px; color: #888; margin: 0;">
							Anda dapat langsung menekan tombol <strong>Reply / Balas</strong> di email ini untuk merespons ke <em>${email}</em>.
						</p>
					</div>
				`,
				text: `Pesan baru dari ${name} (${email}):\n\n${message}\n\n— Kirim balasan langsung ke ${email}`
			})
		});

		const resData = await response.json();

		if (!response.ok) {
			console.error('Resend API error:', response.status, resData);
			const errorMsg = resData?.message || 'Gagal mengirim email lewat Resend.';
			return json({ error: errorMsg }, { status: response.status });
		}

		return json({ success: true, id: resData.id });
	} catch (err: unknown) {
		const errorMessage = err instanceof Error ? err.message : 'Terjadi kesalahan server internal.';
		console.error('API Contact error:', err);
		return json({ error: errorMessage }, { status: 500 });
	}
};
