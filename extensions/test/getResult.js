(function() {
    console.clear();

    $.extend({
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
        }
    });







})();
