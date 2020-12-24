function DownloaderHelper() {
    this.init();
    this.catching_regex = /^(http\:\/\/|https\:\/\/)?(www)?(bandzone\.cz\/track\/)(play)(\/)(\d+)(.+)$/;
}

DownloaderHelper.prototype = {
    constructor: DownloaderHelper,

    init: function() {

    },

    generateDownloadLink: function(playLink) {
        return playLink.replace(this.catching_regex, "$1$2$3download$5$6");
    },

    polishNames: function(name) {
        return name;
    }
}