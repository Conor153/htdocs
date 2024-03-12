$("document").ready(function() {

    $.get("http://localhost/jQuery/getArtistsJSON.php", function(data) {
        $.each(data.music, function(index, artists) {
        $("#myDiv").append(`${artists.artist_name}<br>`);
       });
  });
  
});
