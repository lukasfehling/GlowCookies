import { GlowCookiesBannerButton } from "./glowCookiesBannerButton";

export interface GlowCookiesBannerConfig {
	style?: 1|2|3;
	border?: 'border'|'none';
	position?: 'left'|'right';
	backgroundColor?: string;
	color?: string;
	heading?: string;
	description?: string;
	privacyLink?: string;
	privacyLinkText?: string;
	acceptButton?: GlowCookiesBannerButton;
	rejectButton?: GlowCookiesBannerButton;
}
