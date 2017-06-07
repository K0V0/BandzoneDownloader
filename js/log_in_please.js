
function sendCloseSignal() {
	chrome.runtime.sendMessage({
		did_login: "true"
	});
}

$(document).ready(function() { 

	$("#do_login").on('click', function() {
		var login_tab = window.open("http://bandzone.cz/?do=login");
		sendCloseSignal();
	});

	$("#fuck_off").on('click', function() {
		sendCloseSignal();
	});

	window.onbeforeunload = function() {
	    sendCloseSignal();
	}

});
