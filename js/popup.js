function Popup() {
    this.HELPER = new PopupHelper();
    this.links = [];
}
  
Popup.prototype = {
    constructor: Popup,
  
    init: function() {
        this.load();
        this.handlers();  
    },

    load: function() {
        this.HELPER.sendMessage("getSongs", this.drawLinks);
    },

    handlers: function() {
        var totok = this;

        $('button#download_all').on('click', function () {
            totok.downloadLinks(); 
        });
    },

    drawLinks: function(songs) {
        var container = $(document).find('div#songs');
        for (var i=0; i<songs.length; i++) {
            container.append('<a></a>');
            container.children('a').last()
                .attr('href', songs[i].link)
                .attr('download', 'download')
                .text(songs[i].title);
            container.append('<br>');
        }
    },

    downloadLinks: function() {
        var totok = this;
        $('div#songs').children('a').each(function() {
            var url = $(this).attr('href');
            totok.links.push($(this).attr('href'));
        });
        for (var i=0; i<this.links.length; i++) {
            chrome.downloads.download({url: this.links[i]});
        }
    }

}

var popup = new Popup();

document.addEventListener('DOMContentLoaded', function() {
    popup.init(); 
}, false);
