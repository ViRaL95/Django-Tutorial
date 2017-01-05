window.onload=function(){
	content=document.getElementById("hidden-div").innerHTML;
	console.log(content);
	var myDrop=new Drop({
	  target: document.querySelector('.drop-target'),
	  classes: 'drop-theme-arrows',
	  position: 'right middle',
	  openOn: 'hover',
	  content:content
	})
};