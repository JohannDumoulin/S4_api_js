import $ from 'jquery';

export function getCountryHelper() {
	console.log($('#search_form input').val());
	return($('#search_form input').val());
}