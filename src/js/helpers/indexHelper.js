import $ from 'jquery';

export function indexHelper() {
	$.urlParam = (country) => {
		var results = new RegExp('[\?&]' + country + '=([^&#]*)').exec(window.location.href);
		return results[1] || 0;
	}
	
	$('input[type=text]').attr('value', $.urlParam('country'));

	return($.urlParam('country'));
}