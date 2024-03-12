$("document").ready(function(){

    $.getJSON(`netflix.json`, function(data) {        
        
        data.sort(function(a,b){
            if(a.release_year < b.release_year )
                return -1;
            else if(a.release_year > b.release_year )
                return 1;
            else
                return 0;

            // OR
            // return a.release_year - b.release_year;
        });
        
        $.each(data, function(index, value) {
            $("#tbody").append(`<tr><td>${value.title}</td><td>${value.type}</td><td style="color: red">${value.release_year}</td><td>${value.runtime}</td></tr>`);
        });
    });  
        
})
