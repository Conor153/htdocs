$("document").ready(function() {
    
    $("select").change(
        function ()
        {
            
            var position = $("select").val();
            getData(position);
            console.log(position);
            
        }
    );


  });
  





  function getData(position) {
    $.get(`${position}.txt`, function(data) {
      $("#myDiv").html(data);
    });
  }