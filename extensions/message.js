(function() {

    $(
        '<div class="test_query">' +
        '<input type="input">' +
        '<input type="button" value="query">' +
        '</div>'
    ).appendTo($('body'));


    $('.test_query').find('input').eq(1).click(function() {
        $.sendToExtension({
            type: 'query',
            query: $('.test_query').find('input').eq(0).val()
        });

        console.log($('.test_query').find('input').eq(0).val());
    });


    chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
        console.log(request.result);
    });






})();
