$("document").ready(function() {
  getData();
});

function getData() {
  $.get("MyAjaxData.txt", function(data) {
    $("#myDiv").html(data);
  });
}