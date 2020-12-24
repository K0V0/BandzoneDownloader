// original html on page is modified by some js to make it html5
// in html5, required information for plugin to work is not available

function Downloader() {
	this.HELPER = new DownloaderHelper();
	this.origPlaylistElems;
	this.songs = [];
	//this.init();
}

Downloader.prototype = {
	constructor: Downloader,

	init: function() {
		this.origPlaylistElems = $("body").find('li.track');
		this.listSongs();
	},

	listSongs: function() {
		var totok = this;
		this.origPlaylistElems.each(function() {

			var play_link = $(this).data('source');
			var text_elem = $(this).children('strong').first();
			var title = text_elem.clone().children().remove().end().text();
			var album = text_elem.clone().children().remove().text();
			var original_title = text_elem.text();

			var song = {
				original_title: original_title,
				title: totok.HELPER.polishNames(title),
				album: totok.HELPER.polishNames(album),
				link: totok.HELPER.generateDownloadLink(play_link)
			};

			totok.songs.push(song);
		});
	},

	getSongs: function() {
		return this.songs;
	},

	appendLinksWhereNone: function() {/*
		var totok = this;
		this.playlist_items.each(function() {
			if ($(this).children("a").hasClass("download") === false) {
				$(this).append( totok.generateDownloadLink($(this)) );
				$(this).children("a.download").on('click', function(e) {
					e.stopPropagation();
				});
			}
		});
	*/},

	/*triggerNotLoggedPopup: function() {
		chrome.runtime.sendMessage({
			not_logged_in: "true"
		});
	},*/
}



