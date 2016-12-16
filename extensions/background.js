(function() {

    // receive from script
    chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
        chrome.tabs.query({
            active: true
        }, function(tab) {

            $.ajax({
                url: 'http://www.zimuzu.tv/search/index?keyword=' + encodeURIComponent(request.query) + '&search_type=',
                success: function(data) {
                    $.sendToScript(tab[0].id, {
                        result: data
                    });

                    var link = $.getLink($(data));

                    $.sendToScript(tab[0].id,{
                        result:link
                    });


                }
            });


        });
    });


})();
