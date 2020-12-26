// original html on page is modified by some js to make it html5
// in html5, required information for plugin to work is not available

function Downloader() {
	this.HELPER = new DownloaderHelper();
	this.origPlaylistElems;
	this.songs = [];
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
				original_title: original_title.trim(),
				title: totok.HELPER.polishNames(title),
				album: totok.HELPER.polishAlbums(album),
				link: totok.HELPER.generateDownloadLink(play_link),
				hash: md5(original_title)
			};

			totok.songs.push(song);
		});
	},

	getSongs: function() {
		return this.songs;
	},

	getSongByHash: function(hash) {
		for (var i=0; i<this.songs.length; i++) {
			if (this.songs[i].hash == hash) {
				return this.songs[i];
			}
		}
	}

}



