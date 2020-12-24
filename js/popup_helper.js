function PopupHelper() {

}

PopupHelper.prototype = {
    constructor: PopupHelper, 

    init: function() {
        
    },

    sendMessage: function(method, callback) {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {method: method}, function(response) {
                if (!window.chrome.runtime.lastError) {
                    if (callback !== undefined) {
                        callback(response.data);
                    }
                }
            });  
        });
    }
}