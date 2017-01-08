window.onload=function(){
	content=document.getElementById("hidden-div").innerHTML;
	windowWidth=$(window).width();
	if(windowWidth<=767){
		 myDrop=new Drop({
		  target: document.querySelector('.drop-target'),
		  classes: 'drop-theme-arrows',
		  position: 'left middle',
		  openOn: 'hover',
		  content:content,
		})

	}
	else{
	  myDrop=new Drop({
	  target: document.querySelector('.drop-target'),
	  classes: 'drop-theme-arrows',
	  position: 'bottom center',
	  openOn: 'hover',
	  content:content,
	})

	}
	$(window).on('resize', function(event){
    var windowWidth = $(window).width();
	if(windowWidth<=767){
		myDrop.destroy();
		 myDrop=new Drop({
		  target: document.querySelector('.drop-target'),
		  classes: 'drop-theme-arrows',
		  position: 'left middle',
		  openOn: 'hover',
		  content:content,
		})
	}
	else{
	  myDrop.destroy();
	  myDrop=new Drop({
	  target: document.querySelector('.drop-target'),
	  classes: 'drop-theme-arrows',
	  position: 'bottom center',
	  openOn: 'hover',
	  content:content,
	})
	}	
	});

};