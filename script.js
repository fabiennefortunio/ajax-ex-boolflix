$(document).ready(function() {


    //Aggiungo il Handlebars tempate che mi serve per raccogliere i dati


//keypress
    $( "#search_movie" ).keypress(function() {
        if(event.which == '13'){
            api_search_movie();
        }

    });
    //$('.container').empty();
    $('#search_movie').on('click',function(event){
        api_search_movie();
});
        var api_search_movie = function() {
        var template_html = $('#template_film').html();
        var template_function = Handlebars.compile(template_html);
        var search_movie = $('#search_movie').val();
        var api_url = 'https://api.themoviedb.org/3';

//AJAX SECTION
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
                    var poster_path = current_film.poster_path
                    var dati = {
                        number : i + 1,
                        title : title,
                        original_title : original_title,
                        original_language : language,
                        rating : Math.round(vote),
                        poster_path : poster_path

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
        $('#search_serie').click(function(){
            api_search_serie();
    });
            var api_search_serie = function() {
                /*var template_html = $('#template_serie').html();
                var template_function = Handlebars.compile(template_html);*/
                var search_serie= $('#search_serie').val();
                var api_url = 'https://api.themoviedb.org/3';
        $.ajax({
            'url': api_url + '/search/tv',
            'data': {
                'api_key': '5f9e408b31b5eab1cd8a1f5bf65e5ae3',
                'query': search_serie,
                'language': 'en-EN'
            },
            'method': 'GET',
            'success': function(data_response) {
                console.log(data_response);
                var serie = data_response.results;
                for (var i = 0; i < serie.length; i++) {
                    var current_serie = serie[i];
                    var title = current_serie.title;
                    console.log(current_serie);
                    var original_title = current_serie.original_title
                    var language = current_serie.original_language
                    var vote = current_serie.vote_average
                    var dati = {
                        name : name,
                        original_name : original_name,
                        original_language : original_language,
                        vote_average : Math.round(vote) / 2
                            // MILESTONE 2 - AGGIUNGO LE STELLINE AL RATING


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

        // BANDIERE API
        // API SPAIN: https://public-us.opendatasoft.com/api/records/1.0/search/?dataset=country-flags&q=spain&facet=country&refine.country=Spain
        // API ITALY: https://public-us.opendatasoft.com/api/records/1.0/search/?dataset=country-flags&q=italy&facet=country&refine.country=Italy
        // API USA: https://public-us.opendatasoft.com/api/records/1.0/search/?dataset=country-flags&q=usa&facet=country&refine.country=United+States
        // API FRANCE: https://public-us.opendatasoft.com/api/records/1.0/search/?dataset=country-flags&q=france&facet=country&refine.country=France

        //var lingue = original_language.dati;

});
