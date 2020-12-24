
var downloader = new Downloader();

$(document).ready(function() { 

	downloader.init();

	/*if (downloader.playlist.length == 0) {
		// pravdepodobne neni na stranke s kapelou a prehravacom
	} else {
		if ((songs = downloader.playlist_items).length >= 1) {
			console.log("aspon 1 pesnicka");
			
			downloader.appendLinksWhereNone();
		}
	}*/

 	console.log("BandzoneDownloader ready");
});

console.log("BandzoneDownloader loaded");

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

	if (request.method == "getSongs") {
	  	//sendResponse({ data: "testdata" });
		sendResponse({ data: downloader.getSongs() });
	} 
  
});