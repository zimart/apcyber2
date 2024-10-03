export default {
	resources: {
		polski: {
			translation: Constants.defaultLanguageKeys
		}
	},
	getResources() {
		return this.resources;
	},
	async selectLanguage(lang = Select16.selectedOptionValue){
		if (!this.resources[lang]){
			showModal(LanguageLoading.name);
			await getLanguageValuesAI.run();
			closeModal(LanguageLoading.name);
			this.resources[lang] = {
				translation: JSON.parse(getLanguageValuesAI.data.response)
			};
			this.setup(lang);
		} else {
			i18next.changeLanguage(lang);
			this.translate();
		}
	},
	async setup(lang='polski'){
		await i18next.init({
			debug: true,
			resources: this.resources
		});
		await i18next.changeLanguage(lang);
		this.translate();
	},
	translate(key){
		return i18next.t(key)
	}
}