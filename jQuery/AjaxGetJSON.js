$("document").ready(function() {
  getData();
});

function getData() {

  $.getJSON("clubs.json", function(data) {

    for(var i=0;i<data.clubs.length;i++)
    	$("#myDiv").append(data.clubs[i].name + "<br>");

   	// OR

   	// $.each(data.clubs, function(index, value) {
   	// 	$("#myDiv").append(value.name + "<br>");
   	// });

  });
  
}