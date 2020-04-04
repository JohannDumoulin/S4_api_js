import $ from 'jquery';

export function indexHelper() {
	$.urlParam = (country) => {
		var results = new RegExp('[\?&]' + country + '=([^&#]*)').exec(window.location.href);
		return results[1] || 0;
	}
	
	return($.urlParam('country'));
}