function DownloaderHelper() {
    this.init();
    this.catching_regex = /^(http\:\/\/|https\:\/\/)?(www)?(bandzone\.cz\/track\/)(play)(\/)(\d+)(.+)$/;
    this.polishing_regex = /^\r*\n*\s*\d+\s*\.\s*\r*\n*/;
    this.polishing_regex_2 = /^\s*\-\s*/;
}

DownloaderHelper.prototype = {
    constructor: DownloaderHelper,

    init: function() {

    },

    generateDownloadLink: function(playLink) {
        return playLink.replace(this.catching_regex, "$1$2$3download$5$6");
    },

    polishNames: function(name) {
        return name.replace(this.polishing_regex, "").trim();
    },

    polishAlbums: function(album) {
        return album.replace(this.polishing_regex_2, "").trim();
    }
}