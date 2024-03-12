$("document").ready(function(){

    $.getJSON(`netflix.json`, function(data) {
        
        $.each(data, function(index, value) {
            $("#tbody").append(`<tr><td>${value.title}</td><td>${value.type}</td><td>${value.release_year}</td><td>${value.runtime}</td></tr>`);
        });
    });  
        
})