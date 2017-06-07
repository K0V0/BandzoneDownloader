
function Downloader() {
	this.regex_to_get_song_id = /\?id=([0-9]+)\&do=playlistAdd$/;
	this.playlist;
	this.playlist_items;

	this.init();
}

Downloader.prototype = {
	constructor: Downloader,

	init: function() {
		this.playlist = $("ul.ui-audioplayer-playlist");
		this.playlist_items = this.playlist.children("li");
	},

	generateDownloadLink: function(totok) {
		var song_name = totok
			.children("span.ui-audioplayer-song")
			.children("span.ui-audioplayer-song-wrapper")
			.children("span.ui-audioplayer-song-title")
			.text();
		var song_id = totok
			.children("a.playlist-add")
			.attr("href")
			.match(this.regex_to_get_song_id)[1];

		return $.parseHTML("<a target=\"_blank\" class=\"download ui-audioplayer-icon ui-audioplayer-icon-download modded-by-kovo\" rel=\"nofollow\" href=\"http://bandzone.cz/track/download/" + song_id + "\" title=\"Stiahnuť '" + $.trim(song_name) + "' cez BandzoneDownloader\" style=\"\">Stiahnuť</a>");
	},

	appendLinksWhereNone: function() {
		var totok = this;
		this.playlist_items.each(function() {
			if ($(this).children("a").hasClass("download") === false) {
				$(this).append( totok.generateDownloadLink($(this)) );
				$(this).children("a.download").on('click', function(e) {
					e.stopPropagation();
				});
			}
		});
	},

	triggerNotLoggedPopup: function() {
		chrome.runtime.sendMessage({
			not_logged_in: "true"
		});
	},
}



