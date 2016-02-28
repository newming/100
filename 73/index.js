window.onload = function (){
	var page1 = document.getElementById("page1");
	var page2 = document.getElementById("page2");
	var page3 = document.getElementById("page3");
	var page4 = document.getElementById("page4");

	page1.addEventListener("click",function (event) {
		page1.style.display = "none";
		page2.style.display = "block";

		setTimeout(function(){
			page2.setAttribute("class","page fadeout");
			page3.setAttribute("class","page fadein");
		},3500);
	},false)

	page3.addEventListener("click",function (event) {
		
		page2.style.display = "none";
		page3.style.display = "none";

	},false)
}