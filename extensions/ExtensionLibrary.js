/**
 *  add to jQuery
 */

$.fn.extend({

    sendToExtension: function(data) {
        chrome.extension.sendMessage(data);
    },

    sendToScript: function(id, data, callback) {
        chrome.tabs.sendMessage(id, data, function(response) {
            callback(response);
        });
    },


    receiveFromExtension: function(config) {
        // var requese = config.request;
        // var sender = config.sender;
        // var sendResponse = config.sendResponse;

        chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {});
    },

    receiveFromScript: function() {

    }




});


/**
 * script side
 */

// receive from extension

// send to extension



/**
 * extension side
 */

// send to script
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({
        active: true
    }, function(tab) {
        console.log(tab[0].id);
        chrome.tabs.sendMessage(tab[0].id, {
            msg: 'hello'
        });
    });

});

// receive from script
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    chrome.tabs.query({
        active: true
    }, function(tab) {

    });
});
