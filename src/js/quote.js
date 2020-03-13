import $ from 'jquery';

/*
* Objectif : récupérer une citation aléatoire à partir d'une API et l'afficher
*
* Étapes :
* 1- Créer une référence vers les éléments du DOM qu'on va utiliser
* 2- Récupérer une citation aléatoire à partir de l'API de QuotesOnDesign (https://quotesondesign.com/api/)
* 3- Afficher la citation
* */

export default class Quote {
	constructor () {
		this.initEls();
		this.initEvents();
	}

	initEls() {
		this.$els = {
			quoteText: $('.joke')
		}
	}

	initEvents() {
		this.getQuote();
	}

	getQuote() {
		const api = {
			endpoint: 'https://api.chucknorris.io/jokes/random'
		};

		$.ajaxSetup({cache: false});

		$.getJSON(api.endpoint, api.params)
		.then((response) => {
			console.log(response);
			this.renderQuote(response.value);
		})
		.catch((e) => {
			console.log('error with the quote:', e)
		});
	}

	renderQuote(quote) {
		this.$els.quoteText.prepend(quote);
	}
}
	