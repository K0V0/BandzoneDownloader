function Popup() {
    this.HELPER = new PopupHelper();
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
        //var totok = this;

        $('button#download_all').on('click', function () { 
            //
        });
    },

    drawLinks: function(songs) {
        var container = $(document).find('div#songs');
        for (var i=0; i<songs.length; i++) {
            container.append('<a></a>');
            container.children('a').last()
                .attr('href', songs[i].link)
                .text(songs[i].title);
            container.append('<br>');
        }
    }
}

var popup = new Popup();

document.addEventListener('DOMContentLoaded', function() {
    popup.init(); 
}, false);
