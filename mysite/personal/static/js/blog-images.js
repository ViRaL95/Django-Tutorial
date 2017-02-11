/*
Consistently forgetting equals equals when comparing string. Consistently forgetting which variable has beenc reated
already and which blog has not been created. 
If the id is blog0, the most recent image is going to be loaded. So we need to move all the blogs down 
every single time 
*/
$(document).ready(function(){
console.log("entered");
var i=0;

while(document.getElementById("blog"+i.toString())){
//blog num is the current blog were at blog0, blog1 ...	

	var blognum="blog"+i.toString();
//retrieve the current blog through getting the ID of blognum	
	var currentblog= document.getElementById(blognum);	
	if(blognum=="blog0" && currentblog){
		console.log("entered");
		var blogimage=document.getElementsByClassName("blog-image")[i];
		blogimage.innerHTML="<img src='/static/personal/img/code.jpg'></img>";

	}
	if(blognum=="blog1" && currentblog){
		console.log("entered2");
		var blogimage=document.getElementsByClassName("blog-image")[i];
		blogimage.innerHTML="<img src='/static/personal/img/exploring.jpg'></img>";

	}
i++;

}

});