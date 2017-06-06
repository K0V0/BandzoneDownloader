
$(document).ready(function() { 

	var downloader = new Downloader();

	if (downloader.playlist.length == 0) {
		// pravdepodobne neni na stranke s kapelou a prehravacom
	} else {
		if ((songs = downloader.playlist_items).length >= 1) {
			// prehravac je a aspon jedna pesnicka v nom 
			if ((songs.children("a.playlist-add").length >= 1) === false) {
				// uzivatel je pravdepodobne neprihlseny, zobrazit zdrbanie
				downloader.triggerNotLoggedPopup();
			} else {
				// vsetko OK
				downloader.appendLinksWhereNone();
			}
		}
	}

 	console.log("BandzoneDownloader ready");
});

console.log("BandzoneDownloader loaded");