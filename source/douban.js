(function() {


    var tvData;
    var tvInfo;

    // $.ajax({
    //     url: 'testData.json',
    //     dataType: 'json',
    //     success: function(data) {
    //         tvData = data;
    //         load();
    //     },
    //
    // });



    tvData = window.testData;
    tvInfo = window.testInfo;
    load();



    function load() {

        function FilmModel(data, info) {
            this.data = data;
            this.info = info;
        }

        FilmModel.prototype = {

            constructor: FilmModel,

            getNameEn: function() {
                return this.info.name_en;
            },

            getNameCn: function() {
                return this.info.name_cn;
            },

            getUpdate: function() {
                return this.info.update;
            },

            getStatus: function() {
                return this.info.status.season + this.info.status.status;
            },

            getSeasons: function() {
                return Object.keys(this.data);
            },

            getSeasonResolutions: function(season) {
                return Object.keys(this.data[season]);
            },

            getSeasonResolutionLinks: function(season, resolution) {
                var arr = [];
                var resolutionObj = this.data[season][resolution];

                Object.keys(resolutionObj).forEach(function(el, index) {

                    arr.push({
                        name: el,
                        link: resolutionObj[el]
                    });


                });

                return arr;
            }




        };


        var dataModel = new FilmModel(tvData, tvInfo);

        var movieExtension = new Vue({
            el: '#extensionWrap',
            data: {

                isCur: true,

                //active
                curSeasonIndex: 0,
                curResolutionIndex: 0,

                curSeason: 'season_1',
                curResolution: 'hr-hdtv',

                // head
                name_en: dataModel.getNameEn(),
                name_cn: dataModel.getNameCn(),
                status: dataModel.getUpdate(),
                update: dataModel.getStatus(),

                // tab
                seasons: dataModel.getSeasons(),
                resolutions: dataModel.getSeasonResolutions('season_1'),

                // linkes
                links: dataModel.getSeasonResolutionLinks('season_1', 'hr-hdtv'),



            },

            methods: {

                changeSelect: function(e, index) {

                },
                changeSeason: function(e, index) {
                    this.curSeasonIndex = index;
                    var season = e.target.getAttribute('data-type');
                    if (season !== this.cueSeason) {
                        this.changeLinks({
                            season: season
                        });
                    }
                },

                changeResolution: function(e, index) {
                    this.curResolutionIndex = index;
                    var resolution = e.target.getAttribute('data-type');
                    if (resolution !== this.resolution) {
                        this.changeLinks({
                            resolution: resolution
                        });
                    }
                },

                changeLinks: function(config) {
                    var season = config.season || this.curSeason;
                    var resolution = config.resolution || this.curResolution;
                    var links = dataModel.getSeasonResolutionLinks(season, resolution);
                    if (links) {
                        this.links = links;
                    }

                }
            }


        });


    }






})();
