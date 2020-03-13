import $ from 'jquery';
import {getCountryHelper} from './helpers/countryHelper';
import Background from './background';

/*
* Objectif : déterminer un "salut" en fonction de l'heure et l'afficher
*
* Étapes :
* 1- Créer une référence vers les éléments du DOM qu'on va utiliser
* 2- Récuperer une salutation en fonction de l'heure
* 3- Récuperer une valeur aléatoire à partir d'un tableau
* 4- Afficher le résultat
* */

export default class Country {
	constructor (country) {
		this.initEls();
		this.initEvents(country);
	}

	initEls () {
		this.$els = {
			country: $('.country_name'),
			capital: $('.country_capital')
		}
	}
	initEvents(country) {
		this.getCountry(country);
	}

	getCountry(country) {
		const api = {
			endpoint: 'https://restcountries.eu/rest/v2/name/'+country,
		};

		$.ajaxSetup({cache: false});

		$.getJSON(api.endpoint, api.params)
		.then((response) => {
			console.log(response);
			this.renderCountry(response[0].name, response[0].capital);
		})
		.catch((e) => {
			console.log('error with the quote:', e)
		});
	}

	renderCountry(country, capital) {
		this.$els.country.text(country);
		this.$els.capital.text(capital);
		new Background(capital);
	}
}