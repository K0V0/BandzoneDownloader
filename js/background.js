var login_window;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	
    if (request.not_logged_in == "true") {
		login_window = window.open(
			"html/log_in_please.html",
			"extension_popup",
			"width=300,height=300,status=no,scrollbars=yes,resizable=no"
		);
    }
    if(request.did_login == "true") {
    	setTimeout(login_window.close(), 1000);
    }
});

