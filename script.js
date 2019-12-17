$(document).ready(function() {


    //Aggiungo il Handlebars tempate che mi serve per raccogliere i dati


//keypress
    $( ".search_movie" ).keypress(function() {
        if(event.which == '13'){
            api_search();
        }

    });
//append


    $('#search_button').click(function(){
        api_search();
    });
        var api_search = function() {
        var template_html = $('#template_film').html();
        var template_function = Handlebars.compile(template_html);
        var search_movie = $('.search_movie').val();
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
                for (var i = 0; i < film.lenght; i++) {
                    var current_film = film[i];
                    var title = film_corrente.title;
                    console.log(title);
                    var original_title = film.original_title
                    var language = film.language
                    var vote = vote.film
                    var dati = {
                        number : i + 1,
                        title : title,
                        original_title : original_title,
                        language : original_language,
                        vote : vote_average;
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



});
