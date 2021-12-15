import { GlowCookiesBannerConfig } from "./glowCookiesBannerConfig";
import { GlowCookiesToggleConfig } from "./glowCookiesToggleConfig";

export interface GlowCookiesConfig {
	localStorageKey?: string;
	bannerConfig?: GlowCookiesBannerConfig;
	toggleConfig?: GlowCookiesToggleConfig;
}
