import { GlowCookiesConfig } from "./interfaces/glowCookiesConfig";

export const GlowCookiesDefaultConfig: GlowCookiesConfig = {
	localStorageKey: 'GlowCookie',
	bannerConfig: {
		style: 1,
		border: 'border',
		position: 'left',
		backgroundColor: '#FAFAFA',
		color: '#000',
		heading: 'Cookies',
		description: 'We use Cookies.',
		privacyLink: '#',
		privacyLinkText: 'Privacy',
		acceptButton: {
			text: 'Accept',
			color: '#fff',
			backgroundColor: '#305973'
		},
		rejectButton: {
			text: 'Reject',
			color: '#000',
			backgroundColor: '#f2f8fd'
		}
	},
	toggleConfig: {
		style: 2,
		border: 'border',
		position: 'left',
		color: '#000',
		backgroundColor: '#FAFAFA',
		text: 'Manage cookies'
	}
}
