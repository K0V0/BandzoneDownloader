function ContentscriptHelper() {

}

ContentscriptHelper.prototype = {
    constructor: ContentscriptHelper,

    init: function() {

    },

    generateDownloadLink: function(song) {
		return $.parseHTML("<a target=\"_blank\" class=\"download ui-audioplayer-icon ui-audioplayer-icon-download modded-by-kovo\" rel=\"nofollow\" href=\"" + song.link + "\" title=\"Stiahnuť '" + song.title + "' cez BandzoneDownloader\" style=\"\" download>Stiahnuť</a>");
	},
}