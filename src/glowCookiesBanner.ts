import { BehaviorSubject } from "rxjs";
import { GlowCookiesBannerConfig } from "./interfaces/glowCookiesBannerConfig";
import { EventEmitter } from "./helper/eventEmitter";

export class GlowCookiesBanner {
	private banner: HTMLDivElement;
	private bannerElement: HTMLDivElement;

	private acceptButton: HTMLButtonElement;
	private rejectButton: HTMLButtonElement;

	public onAccept: EventEmitter<void> = new EventEmitter<void>();
	public onReject: EventEmitter<void> = new EventEmitter<void>();

	constructor (
		private state: BehaviorSubject<boolean>,
		private config: GlowCookiesBannerConfig = {}
	) {
		this.createDOMElementAndBind();
		this.addEventListeners();
	}

	createDOMElementAndBind() {
		this.bannerElement = document.createElement('div');
		this.bannerElement.innerHTML = `<div id="glowCookies-banner" 
											class="glowCookies__banner glowCookies__banner__${ this.config.style } glowCookies__${ this.config.border } glowCookies__${ this.config.position }"
											style="background-color: ${ this.config.backgroundColor };">
                                    		<h3 style="color: ${ this.config.color };">${ this.config.heading }</h3>
                                    		<p style="color: ${ this.config.color };">
                                        		${ this.config.description } 
                                        		<a href="${ this.config.privacyLink }"
													target="_blank" 
													class="read__more"
													style="color: ${ this.config.color };">
													${ this.config.privacyLinkText }
                                        		</a>
                                    		</p>
											<div class="btn__section">
												<button type="button" id="acceptCookies" class="btn__accept accept__btn__styles" style="color: ${ this.config.acceptButton.color }; background-color: ${ this.config.acceptButton.backgroundColor };">
													${ this.config.acceptButton.text }
												</button>
												<button type="button" id="rejectCookies" class="btn__settings settings__btn__styles" style="color: ${ this.config.rejectButton.color }; background-color: ${ this.config.rejectButton.backgroundColor };">
													${ this.config.rejectButton.text }
												</button>
											</div>
										</div>`;
		document.body.appendChild(this.bannerElement);

		this.banner = <HTMLDivElement>document.getElementById('glowCookies-banner');
		this.acceptButton = <HTMLButtonElement>document.getElementById('acceptCookies');
		this.rejectButton = <HTMLButtonElement>document.getElementById('rejectCookies');
	}

	addEventListeners() {
		this.acceptButton.addEventListener('click', () => {
			this.onAccept.emit();
		});

		this.rejectButton.addEventListener('click', () => {
			this.onReject.emit();
		});
	}

	public open() {
		this.banner.classList.add('glowCookies__show');
	}

	public close() {
		this.banner.classList.remove('glowCookies__show');
	}
}
