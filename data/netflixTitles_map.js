$("document").ready(function(){

    $.getJSON(`netflix.json`, function(movies) {
        // console.log(data);

        movies = movies.map(function(movie){
            movie.release_year = 2023;            
            return movie;
        });
    
        $.each(movies, function(index, value) {
            $("#tbody").append(`<tr><td>${value.title}</td><td>${value.type}</td><td style="color:red">${value.release_year}</td><td>${value.runtime}</td></tr>`);
        });
    });  
        
})

