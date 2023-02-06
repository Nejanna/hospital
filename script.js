
   //наігація по основній сторорінці (основне меню)
   $("[data-scroll]").on("click",function(event){
    event.preventDefault();
    let elementId=$(this).data('scroll');
    let elementOffset = $(elementId).offset().top;
    $("html,body").animate({
      scrollTop: elementOffset-150
    },700);
  
   });
/*навігація по сторінкам*/
   $('#entrance').on('click', function(){     
    window.location.href = 'button.html';
   });
   $('#registration').on('click', function(){     
    window.location.href = 'reg.html';
   });
   $('.house').on('click', function(){     
    window.location.href = 'index.html';
   });
/*валидація форми*/
$(document).ready(function(){
$("form").on('submit',function(event){
    event.preventDefault();
    let domen= $(".form_input").val();
    $(".error").remove();
    domen ==""?$(".valbutton").after('<div class="error"> !!!The field is not filled</div>'): dos=true;
   if( dos == true){console.log("fields are filled");
$("form").off('submit').submit();}
});
});
/*  закріплення меню*/
$("document").ready(function($){
 
	var nav = $('.rembo ')
 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			nav.addClass("f-nav");
           
		} else {
			nav.removeClass("f-nav");
		}
	});
 
});

//  map
function initMap() {
    const uluru = { lat: 50.531071959114634, lng: 30.2113126734045 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;

  // burger menu
  $(".burger-menu ").on("click",".bar",function(){
  
    $(".menu").slideToggle();//slideToggle приховання елементів 
    $(".bar").toggleClass('change');
  });