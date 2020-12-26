function Contentscript() {
	this.HELPER = new ContentscriptHelper();
	this.DOWNLOADER = new Downloader();
}

Contentscript.prototype = {
	constructor: Contentscript,

	init: function() {
		this.DOWNLOADER.init();
		this.appendDownloadButtons();
	},

	appendDownloadButtons: function() {
		var totok = this;
		if (this.DOWNLOADER.getSongs().length == 0) {
			// pravdepodobne neni na stranke s kapelou a prehravacom
		} else {
			var songsElements = $('div#playerWidget').find('ul.ui-audioplayer-playlist').children('li');
			songsElements.each(function() {
				if ($(this).children('a.download').length == 0) {
					var hash = md5($(this).find('span.ui-audioplayer-song-wrapper').text());
					var song = totok.DOWNLOADER.getSongByHash(hash);
					$(this).append(totok.HELPER.generateDownloadLink(song));
					$(this).children('a.download').click(function(e) {
						e.stopPropagation();
					});
				}
			});	
		}
	},

	getSongs: function() {
		return this.DOWNLOADER.getSongs();
	}
}

var contentScript = new Contentscript();

$(window).on('load', function() { 
	contentScript.init();
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.method == "getSongs") {
		sendResponse({ data: contentScript.getSongs() });
	} 
});