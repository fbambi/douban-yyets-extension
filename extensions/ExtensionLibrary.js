/**
 *  add to jQuery
 */


$.extend({
    sendToExtension: function(data) {
        chrome.extension.sendMessage(data);
    },

    sendToScript: function(id, data) {
        chrome.tabs.sendMessage(id, data, function(response) {
            arguments[2](response);
        });
    },
    getLink: function($pageDom) {
        var resultNum = parseInt($pageDom.find('.search_type')
            .filter('[type=resource]')
            .text()
            .match(/\((\d)+\)/)[1], 10);

        var resultType = $pageDom.find('.search-item').eq(0).find('em').text();
        var link;

        if (resultNum > 0 && resultType.match(/电视剧|电影/)) {
            link = 'http://zimuzu.tv' + $pageDom.find('.search-item').eq(0).find('.fl-info').find('a').eq(0).attr('href').replace('resource', 'resource/list');
        }

        console.log(link);

        return link;
    },
});



// $.extend({
//
//     sendToExtension: function(data) {
//         chrome.extension.sendMessage(data);
//     },
//
//
//
//
//     receiveFromExtension: function(config) {
//         // var requese = config.request;
//         // var sender = config.sender;
//         // var sendResponse = config.sendResponse;
//
//         chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {});
//     },
//
//     receiveFromScript: function() {
//
//     }
//
//
//
//
// });


/**
 * script side
 */

// receive from extension

// send to extension



/**
 * extension side
 */

// send to script

function record() {
    // chrome.browserAction.onClicked.addListener(function(tab) {
    //     chrome.tabs.query({
    //         active: true
    //     }, function(tab) {
    //         console.log(tab[0].id);
    //         chrome.tabs.sendMessage(tab[0].id, {
    //             msg: 'hello'
    //         });
    //     });
    //
    // });
    //
    // // receive from script
    // chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    //     chrome.tabs.query({
    //         active: true
    //     }, function(tab) {
    //
    //     });
    // });
}
