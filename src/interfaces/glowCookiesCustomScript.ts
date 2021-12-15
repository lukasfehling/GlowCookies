export interface GlowCookiesCustomScript {
	cookieName?: string;
	type: 'src' | 'custom';
	position: 'body' | 'head';
	content: string;
	loaded?: () => void;
}
