(function() {
    'use strict';

    var movieExtension = new Vue({
        el: '#extensionWrap',
        data: {

            // head
            name: 'EastWorld',
            status:'第三季连载中',
            lastModifiedTime:new Date().toDateString(),

            // tab
            seasons:[
                '第一季',
                '第二季',
                '第三季'
            ],

            resolutions:[
                'HR-HRTV',
                'WEB-DL',
                '720P',
                '1080P'
            ]



        }


    });



})();
