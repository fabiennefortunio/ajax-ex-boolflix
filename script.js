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
                    var dati = {
                        number : i + 1,
                        title : title,
                        original_title : original_title,
                        original_language : language,
                        rating : Math.round(vote)
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
        // Milestone 2:Trasformiamo il voto da 1 a 10 decimale in un numero intero da 1 a 5, così dapermetterci di stampare a schermo un numero di stelle piene che vanno da 1 a 5,lasciando le restanti vuote (troviamo le icone in FontAwesome).Arrotondiamo sempre per eccesso all’unità successiva, non gestiamo icone mezzepiene (o mezze vuote :P)Trasformiamo poi la stringa statica della lingua in una vera e propria bandiera dellanazione corrispondente, gestendo il caso in cui non abbiamo la bandiera dellanazione ritornata dall’API (le flag non ci sono in FontAwesome).Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricercadovremo prendere sia i film che corrispondono alla query, sia le serie tv, standoattenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON dirisposta diversi, simili ma non sempre identici.


        // divido per due per tranformare i voti in un numero da 1 a 5 arrotondando per eccesso
        // aggiungiamo le bandiere alla stringa lingua
        // nuova chiamata AJAX per la ricerca serie TV


        $.ajax({
            'url': api_url + '/search/tv',
            'data': {
                'api_key': '5f9e408b31b5eab1cd8a1f5bf65e5ae3',
                'query': search_tv,
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
                        number : i + 1,
                        title : title,
                        original_title : original_title,
                        original_language : language,
                        rating : Math.round(vote)
                            // MILESTONE 2 - AGGIUNGIAMO LE STELLINE AL RATING
                            for(i = 0; i < rating.length i++)
                                    if (rating == 0) {
                                        $('.far').show(html); {
                                    }
                                    if (rating[i] / 2 ) {
                                        $('.fas').show(html) * 1;
                                    }
                                    if (rating[i] / 2 ) {
                                        $('.fas').show(html) * 2;
                                    }
                                    if (rating[i] / 2 ) {
                                        $('.fas').show(html) * 3;
                                    }
                                    if (rating[i] / 2 ) {
                                        $('.fas').show(html) * 4;
                                    }
                                    if (rating[i] / 2 ) {
                                        $('.fas').show(html) * 5;
                                    }
                    }
                    var html = template_function(dati);
                    $('.container').append(html);
                }
            },
            'error': function() {
                alert('error');
            }
        });






        // inseriamo le bandiere

});
