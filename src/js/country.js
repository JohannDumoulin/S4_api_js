import $ from 'jquery';
import Background from './background';

/*
* Objectif : Récupérer des données sur un pays et les afficher
*
* Étapes :
* 1- Créer une référence vers les éléments du DOM qu'on va utiliser
* 2- Récuperer les données d'un pays
* 3- Afficher le résultat
* */

export default class Country {
	constructor (country) {
		this.initEls();
		this.initEvents(country);
	}

	initEls () {
		this.$els = {
			country: $('.js_country_name'),
			capital: $('.js_capital'),
			flag: $('.js_flag_container'),
			population: $('.js_population'),
			region: $('.js_region'),
			currency: $('.js_currency'),
			language: $('.js_language')
		}
	}
	initEvents(country) {
		this.getCountry(country);
	}

	getCountry(country) {
		const api = {
			endpoint: `https://restcountries.eu/rest/v2/name/${country}?fullText=true`,
		};

		$.ajaxSetup({cache: false});

		$.getJSON(api.endpoint, api.params)
		.then((response) => {
			console.log(response);
			this.renderCountry(
				response[0].name,
				response[0].capital,
				response[0].flag,
				response[0].population,
				response[0].region,
				response[0].currencies[0].name,
				response[0].languages[0].name
			);
		})
		.catch((e) => {
			console.log('error with the quote:', e)
		});
	}

	renderCountry(country, capital, flag, population, region, currency, language) {
		this.$els.country.text(country);
		this.$els.capital.prepend(`<p>${capital}</p>`);
		new Background(capital);
		this.$els.flag.prepend(`<img id="flag" src="${flag}" alt="Flag of ${country}">`);
		this.$els.population.prepend(`<p>${population}</p>`);
		this.$els.region.prepend(`<p>${region}</p> <img src="src/img/continents/${region}.svg" alt="">`);
		this.$els.currency.prepend(`<p>${currency}</p>`);
		this.$els.language.prepend(`<p>${language}</p>`);
	}
}