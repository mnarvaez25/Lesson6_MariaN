 $(document).ready(function () {
 		
 		$("h2").click(function (){
      $("div").animate({
        opacity:0.5
      }, 1000);
 		
 	});

 		$("h2").delay(1000);
   		$("h2").hide();
      	$("h2").fadeOut(1000);
          $("h2").fadeIn(1000);
    

  	$("#tworows").hide( function(){
    	$("#tworows").delay(1000);
    		$("#tworows").show(1000);
    	});	

  	$("#boxes").hide(function(){
  		$("#boxes").delay(1000);
  		  $("#boxes").show(1000);

  	});

   });
  
		
  		




