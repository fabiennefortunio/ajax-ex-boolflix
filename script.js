$(document).ready(function(){

    var api_url = 'https://api.themoviedb.org/3';

    $.ajax({
        'url': api_url + '/search/movie',
        'data': {
            'api_key':'5f9e408b31b5eab1cd8a1f5bf65e5ae3'
            'query': 'back to the future',
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
            }
        },
        'error' : function() {
            alert('error');
        }
    });
});
