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
                    var original_title = film.original_title;
                    var language = film.language;
                    var vote = film.vote_average;
                    var dati = {
                        number : i + 1,
                        title : title,
                        original_title : original_title,
                        language : original_language,
                        rating : vote_average;
                    };
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

        // Milestone 2:Trasformiamo il voto da 1 a 10 decimale in un numero intero da 1 a 5, così dapermetterci di stampare a schermo un numero di stelle piene che vanno da 1 a 5,lasciando le restanti vuote (troviamo le icone in FontAwesome).Arrotondiamo sempre per eccesso all’unità successiva, non gestiamo icone mezzepiene (o mezze vuote :P)Trasformiamo poi la stringa statica della lingua in una vera e propria bandiera dellanazione corrispondente, gestendo il caso in cui non abbiamo la bandiera dellanazione ritornata dall’API (le flag non ci sono in FontAwesome).Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricercadovremo prendere sia i film che corrispondono alla query, sia le serie tv, standoattenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON dirisposta diversi, simili ma non sempre identici.

        var vote_average = voto_convertito;
        for ( voto_convertito = 0; voto_convertito < 10; voto_convertito ++ )
            if ( voto_convertito == 2 ) {
                return : 1
            };
            if ( voto_convertito == 4 ) {
                return : 2
            };
            if ( voto_convertito == 6 ) {
                return : 3
            };
            if ( voto_convertito == 8 ) {
                return : 4
            };
            if ( voto_convertito == 10 ) {
                return : 5
            };

});
