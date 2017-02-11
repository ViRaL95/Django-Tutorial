
$(document).ready(function(){

	var submit=document.getElementById("submit");
	var message=document.getElementById("message-info");
	var name=document.getElementById("name-info");
	var email=document.getElementById("email-info");
	var reasonforcontact=document.getElementById("contact");
	var asterick=document.getElementsByClassName("asterick");
	var errormessage=document.getElementById("error-message");
	var numprojects=document.getElementsByClassName("project");


$(".project:eq(0)").mouseover(function(){
	$(".githublink:eq(0)").fadeIn("fast","linear");

})
$(".project:eq(0)").mouseleave(function(){
	$(".githublink:eq(0)").fadeOut("fast","linear");

})
$(".project:eq(1)").mouseover(function(){
	$(".githublink:eq(1)").fadeIn("fast","linear");

})
$(".project:eq(1)").mouseleave(function(){
	$(".githublink:eq(1)").fadeOut("fast","linear");

})
$(".project:eq(2)").mouseover(function(){
	$(".githublink:eq(2)").fadeIn("fast","linear");

})
$(".project:eq(2)").mouseleave(function(){
	$(".githublink:eq(2)").fadeOut("fast","linear");

})
$(".project:eq(3)").mouseover(function(){
	$(".githublink:eq(3)").fadeIn("fast","linear");

})
$(".project:eq(3)").mouseleave(function(){
	$(".githublink:eq(3)").fadeOut("fast","linear");

})
$(".project:eq(4)").mouseover(function(){
	$(".githublink:eq(4)").fadeIn("fast","linear");

})
$(".project:eq(4)").mouseleave(function(){
	$(".githublink:eq(4)").fadeOut("fast","linear");

})

$(".leader:eq(0)").mouseover(function(){
	$(".leader-info").fadeIn("fast","linear");

})
$(".leader:eq(0)").mouseleave(function(){
	$(".leader-info").fadeOut("fast","linear");

})
$(".leader:eq(1)").mouseover(function(){
	$(".leader-info").fadeIn("fast","linear");

})
$(".leader:eq(1)").mouseleave(function(){
	$(".leader-info").fadeOut("fast","linear");

})
$(".leader:eq(2)").mouseover(function(){
	$(".leader-info").fadeIn("fast","linear");

})
$(".leader:eq(2)").mouseleave(function(){
	$(".leader-info").fadeOut("fast","linear");

})
$(".leader:eq(3)").mouseover(function(){
	$(".leader-info").fadeIn("fast","linear");

})
$(".leader:eq(3)").mouseleave(function(){
	$(".leader-info").fadeOut("fast","linear");

})
	if(submit){
		submit.onclick=function(){
			if(message.value==""){
				asterick[0].style.display="inline";

			}
			else{
				asterick[0].style.display="none";
			}
			if(name.value==""){
				asterick[1].style.display="inline";

			}
			else{
				asterick[1].style.display="none";				
			}
			if(email.value==""){
				asterick[2].style.display="inline";
			}
			else{
				asterick[2].style.display="none";
			}

			if(message.value=="" || name.value=="" || email.value==""){
				errormessage.style.display="inline";
			}
			else{
				errormessage.style.display="none";
				var messageinfo=$("#message-info").val();
				var nameinfo=$("#name-info").val();
				var emailinfo=$("#email-info").val();

				$.ajax({
					data:{	messageinfo:messageinfo, name:nameinfo, email:emailinfo },
					url:'/emailme/',
					type:'POST',
				/*
				CSRF check 
				*/							
					 beforeSend: function(xhr, settings) {
         				function getCookie(name) {
				             var cookieValue = null;
				             if (document.cookie && document.cookie != '') {
				                 var cookies = document.cookie.split(';');
				                 for (var i = 0; i < cookies.length; i++) {
				                     var cookie = jQuery.trim(cookies[i]);
				                     // Does this cookie string begin with the name we want?
				                     if (cookie.substring(0, name.length + 1) == (name + '=')) {
				                         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
				                         break;
				                     }
				                 }
				             }
             			return cookieValue;
        				 }

         				if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
				             // Only send the token to relative URLs i.e. locally.
				             xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
				         }
    				},
    				success:function(){
    					vex.dialog.confirm({
    						message:'Succesfully sent email to Varun Rao',
    						callback: function(value){

    						}


    					})
    				} 

				})

			}
		}
	}
	content=document.getElementById("hidden-div").innerHTML;
	metrohacks=document.getElementById("MetroHacks");
	metrohackslogo=document.getElementById("MetroHacks-logo");
	metrohacksdropdown=document.getElementById("MetroHacks-dropdown");
	
	if(metrohackslogo){
		$("#MetroHacks").mouseover(function(){
			$("#MetroHacks-dropdown").fadeIn("fast","linear");

		});
		$("#MetroHacks").mouseleave(function(){
			$("#MetroHacks-dropdown").fadeOut("fast","linear");	
		});
	}

	windowWidth=$(window).width();

	if(document.getElementsByClassName("blog-urls")){
	blogs=document.getElementsByClassName("blog-urls");

	for(index=0; index<blogs.length; index++ ){
		console.log("blog"+index);
		blogs[index].setAttribute("id","blog"+index);
	}
	}
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
	  position: 'right middle',
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
	  position: 'right middle',
	  openOn: 'hover',
	  content:content,
	})
	}	
	});
});


