$(document).ready(function() {


    //Aggiungo il Handlebars tempate che mi serve per raccogliere i dati


//keypress
    $( "#search_movie" ).keypress(function() {
        if(event.which == '13'){
            api_search();
        }

    });
    //$('.container').empty();
    $('#search_button').click(function(){
        api_search();
    });
        var api_search = function() {
        var template_html = $('#template_film').html();
        var template_function = Handlebars.compile(template_html);
        var search_movie = $('#search_movie').val();
        var api_url = 'https://api.themoviedb.org/3';
// MILESTONE 1 AJAX SECTION
        $.ajax({
            'url': api_url + '/search/movie',
            'data': {
                'api_key': '5f9e408b31b5eab1cd8a1f5bf65e5ae3',
                'query': search_movie,
                'language': 'en-EN'
            },
            'method': 'GET',
            'success': function(data_response) {
                console.log(data_response);
                var film = data_response.results;
                for (var i = 0; i < film.length; i++) {
                    var current_film = film[i];
                    var title = current_film.title;
                    console.log(current_film);
                    var original_title = current_film.original_title
                    var language = current_film.original_language
                    var vote = current_film.vote_average
                    var dati = {
                        title : title,
                        original_title : original_title,
                        original_language : language,
                        rating : Math.round(vote) / 2 //arrotondiamo per eccesso

                    }
                    var html = template_function(dati);
                    $('.container').append(html);
                }
            },
            'error': function() {
                alert('error');
            }
        });
    }

// MILESTONE 2
//
//     divido per due per tranformare i voti in un numero da 1 a 5 arrotondando per eccesso
//     aggiugiamo le stelline alla stringa vote
//     aggiungiamo le bandiere alla stringa Language
//     nuova chiamata AJAX per la ricerca serie TV
        //
        // $.ajax({
        //     'url': api_url + '/search/tv',
        //     'data': {
        //         'api_key': '5f9e408b31b5eab1cd8a1f5bf65e5ae3',
        //         'query': search_tv,
        //         'language': 'en-EN'
        //     },
        //     'method': 'GET',
        //     'success': function(data_response) {
        //         console.log(data_response);
        //         var serie = data_response.results;
        //         for (var i = 0; i < serie.length; i++) {
        //             var current_serie = serie[i];
        //             var title = current_serie.title;
        //             console.log(current_serie);
        //             var original_title = current_serie.original_title
        //             var language = current_serie.original_language
        //             var vote = current_serie.vote_average
        //             var dati = {
        //                 name : name,
        //                 original_name : original_name,
        //                 original_language : original_language,
        //                 vote_average : Math.round(vote) / 2
        //                     // MILESTONE 2 - AGGIUNGIAMO LE STELLINE AL RATING
        //
        //                          var stelline = dati.vote
        //                          for(i = 0; i < stelline.length i++) {
        //
        //                             if (stelline[i] == 0) {
        //                                 $('.far').show(html); {
        //                             }
        //                             if (stelline[i] == 1 ) {
        //                                 $('.fas').show(html);
        //                             }
        //                             if (stelline[i] == 2 ) {
        //                                 $('.fas').show(html);
        //                             }
        //                             if (stelline[i] == 3 ) {
        //                                 $('.fas').show(html);
        //                             }
        //                             if (stelline[i] == 4  ) {
        //                                 $('.fas').show(html) * 4;
        //                             }
        //                             if (stelline[i] == 5 ) {
        //                                 $('.fas').show(html) * 5;
        //                             }
        //             }
        //             var html = template_function(dati);
        //             $('.container').append(html);
        //         }
        //     },
        //     'error': function() {
        //         alert('error');
        //     }
        // });


        // BANDIERE API
        // API SPAIN: https://public-us.opendatasoft.com/api/records/1.0/search/?dataset=country-flags&q=spain&facet=country&refine.country=Spain
        // API ITALY: https://public-us.opendatasoft.com/api/records/1.0/search/?dataset=country-flags&q=italy&facet=country&refine.country=Italy
        // API USA: https://public-us.opendatasoft.com/api/records/1.0/search/?dataset=country-flags&q=usa&facet=country&refine.country=United+States
        // API FRANCE: https://public-us.opendatasoft.com/api/records/1.0/search/?dataset=country-flags&q=france&facet=country&refine.country=France




});
