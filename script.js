$(document).ready(function(){

    var api_url = 'https://api.themoviedb.org/3';
    var template = Handlebars.compile("template_film");
    //svuoto l'imput
    $('.cerca_film').val('');

    $.ajax({
        'url': api_url + '/search/movie',
        'data': {
            'api_key':'5f9e408b31b5eab1cd8a1f5bf65e5ae3'
            'query': 'Fight Club',
            'language': 'en-EN'
        },
        'method':'GET',
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
        'error' : function() {
            alert('error');
        }
    });
    // ha detto Sofia fare append?

});
