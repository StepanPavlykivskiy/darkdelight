$(document).ready(function () {
	$( "#my-slider" ).sliderPro({
		width: "100%",
		height: 500,
		arrows: true,
		buttons: false,
	});
	$(document).ready(function(){
	$(".sidebarBtn").click(function(){
		$(".sidebar").toggleClass("active");
		$(".sidebarBtn").toggleClass("toggle");
	});
});
});