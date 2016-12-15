(function() {


    var tvData;

    $.ajax({
        url: 'testData.json',
        dataType: 'json',
        success: function(data) {
            tvData = data;
            load();
        },

    });



    function load() {

        function FilmModel(data) {
            this.data = data;
        }

        FilmModel.prototype = {

            constructor: FilmModel,

            getSeasons: function() {
                return Object.keys(this.data);
            },

            getSeasonResolutions: function(whichSeason) {
                return Object.keys(this.data[whichSeason]);
            }
        };


        var thisFilm = new FilmModel(tvData);
        console.log(thisFilm);

        var useData = {
            seasons: thisFilm.getSeasons(),
            resolutions: thisFilm.getSeasonResolutions('season_1')
        };







        var movieExtension = new Vue({
            el: '#extensionWrap',
            data: {

                // head
                name: 'EastWorld',
                status: '第三季连载中',
                lastModifiedTime: new Date().toDateString(),

                // tab
                seasons: useData.seasons,

                resolutions: useData.resolutions



            }


        });


    }






})();
