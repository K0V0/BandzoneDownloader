var login_window;
var login_shit_seen = false;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	
    if (request.not_logged_in == "true") {
      if (login_shit_seen === false) {
    		login_window = window.open(
    			"html/log_in_please.html",
    			"extension_popup",
    			"width=320,height=360,status=no,scrollbars=yes,resizable=no"
    		);
      }
    }

    if(request.did_login == "true") {
      // metuci nazov - spustene po zavreti okna o prihlaseni sa 
      login_shit_seen = true;
    	setTimeout(login_window.close(), 1000);
    }
});

