console.log("linked")

$(function() {
	$("#some-list").on("click", function(event) {
		console.log(event.target)
		console.log(event.currentTarget)
	})
});