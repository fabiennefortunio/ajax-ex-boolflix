$(document).ready(function() {

    // salvo la mia Api

    //Aggiungo il Handlebars tempate che mi serve per raccogliere i dati
    var template = Handlebars.compile("template_film");


    $('.search_movie').keypress(function() {
        if(keycode == 13);
});

    //AJAX SECTION

    var results = $('#template_film').append(function(){

    });

    $('#search_button').click(function(){
        api_search();
    });
    var api_search = function() {
        var search_movie = $('.search_movie').val();
        var api_url = 'https://api.themoviedb.org/3';
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
                for (var i = 0; i < film.lenght; i++) {
                    var current_film = film[i];
                    var title = film_corrente.title;
                    console.log(title);
                    var original_title = film.original_title
                    var language = film.language
                    var vote = vote.film
                }
            },
            'error': function() {
                alert('error');
            }
        });

    }


// come incollare sul html tramite handlebars i results
//keypress per fare una ricerca con Enter 

});
