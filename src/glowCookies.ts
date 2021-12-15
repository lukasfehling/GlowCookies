import { BehaviorSubject } from "rxjs";
import { GlowCookiesConfig } from "./interfaces/glowCookiesConfig";
import { GlowCookiesBanner } from "./glowCookiesBanner";
import { GlowCookiesToggle } from "./glowCookiesToggle";
import { GlowCookiesLanguages } from "./types/glowCookiesLanguages";
import { GlowCookiesDefaultConfig } from "./glowCookiesDefaultConfig";

export class GlowCookies {
	private config: GlowCookiesConfig = GlowCookiesDefaultConfig;

	private state: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.checkStatus());

	private banner: GlowCookiesBanner;
	private toggle: GlowCookiesToggle;

	constructor (
		language: GlowCookiesLanguages,
		config: GlowCookiesConfig = {}
	) {
		this.config = {...this.config, ...config};

		this.banner = new GlowCookiesBanner(this.state, this.config.bannerConfig);
		this.toggle = new GlowCookiesToggle(this.state, this.config.toggleConfig);

		(localStorage.getItem(this.config.localStorageKey) === null) ? this.banner.open() : this.toggle.open();

		this.toggle.openBanner.subscribe(() => {
			this.toggle.close();
			this.banner.open();
		});

		this.banner.onAccept.subscribe(() => {
			this.acceptCookies();
		});

		this.banner.onReject.subscribe(() => {
			this.rejectCookies();
		});
	}

	checkStatus() {
		return localStorage.getItem(this.config.localStorageKey) === "1";
	}

	acceptCookies() {
		this.state.next(true);
		localStorage.setItem(this.config.localStorageKey, "1");
		this.banner.close();
		this.toggle.open();
	}

	rejectCookies() {
		this.state.next(false);
		localStorage.setItem(this.config.localStorageKey, "0");
		this.banner.close();
		this.toggle.open();
	}
}
