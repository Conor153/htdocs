$("document").ready( function () {


	//Border around the h1 element
	// $("h1").css("border", "1px solid red");

	//Border around the p elements
	// $("p").css("border", "1px solid red");

	//Border around the ul element
	// $("ul").css("border", "1px solid red");

	//Border around the li element
	// $("li").css("border", "1px solid red");

	//Border around the class a elements
	// $(".a").css("border", "1px solid red");

	//Border around the class b elements
	//$(".b").css("border", "1px solid red");

	//Border around the elements of id ulist
	// $("#ulist").css("border", "1px solid red");

	//Border around the elements of p in class b
	//$("p + .b").css("border", "1px solid red");

	//Border around the elements with id business
	//$("#business").css("border", "1px solid red");

	//Border around the last li
	//$("li:last").css("border", "1px solid red");

	//Border around the h1 and ul in 1 line
	//$("h1,ul").css("border", "1px solid red");


	////////////////////////////////
	//Week 2
	///////////////////////////////
	//Border around the first p element
	//$("p:first").css("border", "1px solid red");

	//Border around the last p element
	//$("p:last").css("border", "1px solid red");

	//Border around the even elements
	//starts at 0
	//$("p:even").css("border", "1px solid red");

	//Border around the 2nd element of p
	//starts at 0
	//  
	// $("p:eq(1)").css("border", "1px solid red");

	
	//Border around all class elements
	//$("[class]").css("border", "1px solid red");

	//Border around all elements with text Science
	//$(":contains(Science)").css("border", "1px solid red");

	//Alert the html contents of ul
	//alert($("ul").html());

	//Alert the contents of ul
	//alert($("ul").text());

	//Change the contents of h1 to ATU
	//$("h1").text("ATU");

	//Change the second LI to Facilities
	//$("li:eq(1)").text("New Courses");

	//Align first paragraph
	//$("img").attr({src:"twitter.png"});

	//Remove attriubute
	//$("img").removeAttr("src");

	//Add "" to paragraph
	//$("p").append("\"");
	//$("p").prepend("\"");

	//Add "The End" to last paragraph
	//$("p:last").append("The End");

	//Add a hr after the header
	//$("h1").append("<hr>");

	//appened an order list before ul
	//$("ul").prepend("<ol>");
	//$("ol").append("<li>Here we go</li>");

	//alert content of h1 tag
	alert($("h1").text());
	$("h1").prepend("<i>");
	$("h1").text("DOM JavaScript II");
	$("h1").append("</i>");

	$("a").attr({href:"http://www.rte.ie"});







	
	$(".code").click(function(){
	 	$(this).css("background-color", "#f1f1f1");
		jQuery.globalEval( $(this).text() );
	});	
	




	$("#button").click(function(){
		location.reload();
	});	
	






























// 	//$("body").css("border", "1px solid red");
// 	//$("p").css("border", "1px solid red");
// 	//$("ul").css("border", "1px solid red");
// 	//$("ul").fadeOut();
// 	//$("ul").fadeIn();
// 	//$(".a").css("border", "1px solid red");
// 	//$(".b").css("border", "1px solid red");
// 	//$("p.b").css("border", "1px solid red");
// 	//$("#business").css("border", "1px solid red");
// 	//$("ul .b").css("border", "1px solid red");
	
	
	
// 	//$("h1,ul,p").css("border", "1px solid red");	
// 	//$("ul > li").css("border", "1px solid red");
// 	//$("ul>li").css("border", "1px solid red");
	
// 	//$("h1 + p").css("border", "1px solid red");
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
	
// 	// FILTERS
// 	//$("p:first").css("border", "1px solid red");
// 	//$("p:last").css("border", "1px solid red");	
// 	//$("p:even").css("border", "1px solid red");
// 	//$("p:odd").css("border", "1px solid red");	
// 	//$("p:eq(0)").css("border", "1px solid red");
	
	
	
// 	//$("[id]").css("border", "1px solid red");
// 	//$("table[border=0]").css("border", "1px solid red");
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
// 	//$("p:contains(Letterkenny)").css("border", "1px solid red");
// 	//$(":contains(Letterkenny)").css("border", "1px solid red");
// 	//$("p:empty").css("border", "1px solid red");
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
// 	//alert($("ul").html());
// 	//alert($("ul").text());
	
	
	
	
});
