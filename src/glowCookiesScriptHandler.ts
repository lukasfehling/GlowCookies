import { GlowCookiesCustomScript } from "./interfaces/glowCookiesCustomScript";

export class GlowCookiesScriptHandler {
	constructor (
		private customScripts: GlowCookiesCustomScript[] = []
	) {}

	public addCustomScripts() {
		this.customScripts.forEach(script => {
			this.addCustomScript(script);
		});
	}

	addCustomScript(script: GlowCookiesCustomScript) {
		let customScriptTag;

		if (script.type === 'src') {
			customScriptTag = document.createElement('script');
			customScriptTag.setAttribute('src', script.content);
		} else if (script.type === 'custom') {
			customScriptTag = document.createElement('script');
			customScriptTag.text = script.content;
		}

		if (script.loaded) {
			customScriptTag.onload = () => {
				script.loaded();
			};
		}

		if (script.position === 'head') {
			document.head.appendChild(customScriptTag);
		} else {
			document.body.appendChild(customScriptTag);
		}
	}

	public reloadPage() {
		location.reload();
	}
}

