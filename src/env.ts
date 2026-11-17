import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	RESEND_API_KEY: {
		description: 'Kunci API Resend untuk mengirim email.',
		schema: (value) => value ?? ''
	},
	RESEND_TO: {
		description: 'Email penerima pesan dari form kontak.',
		schema: (value) => value ?? ''
	}
});
