
$(document).ready(function() { 

	$("#do_login").on('click', function() {
		var login_tab = window.open("http://bandzone.cz/?do=login");
		chrome.runtime.sendMessage({
			did_login: "true"
		});
	});

	$("#fuck_off").on('click', function() {
		chrome.runtime.sendMessage({
			did_login: "true"
		});
	});

});
