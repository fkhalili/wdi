// $(document).ready(function () {

// })

// $(function() {

// })

var myMainFunction = function myMainFunction() {
	//code
	$("p").eq(1).text("Animals are great!").addClass("sub-head");

	$("#logo").click(function(event) {
		$("#logo").css("background-image", "url(img/logos/puppy.png)");
	})

	$("<div>").addClass("cute-container").appendTo("body");
	$("<div>").addClass("cute").appendTo("cute-container");


	setTimeout(function() {
		$("#ani").eq().addClass('suprise').show();
	}, 3000)

};

$(myMainFunction);