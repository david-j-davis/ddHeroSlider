$(document).ready(function() {

//Check for screen size
var smallScreen;

if(!Modernizr.mq('(min-width:440px)') ){
  smallScreen = true;
} else {
  smallScreen = false;
}

 

  function HeroSlideshow() {

    if (smallScreen === false) {

      $('div.hero-slide:gt(0)').hide();
       
      var slide = ['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide'];
      var startindex=0;
      var divSlide = $('div.hero-slide');
      var divPagin = $('a.hero-pagination');
      var arrow = $('a.hero-arrow-right');

      autoheroslideshow = setInterval(function(){

          startindex++;
          if (startindex == slide.length) {startindex=0;}
          divSlide.removeClass('active').fadeOut();
          divPagin.removeClass('active');
          $('a.hero-pagination[data-link=' + slide[startindex] + ']').addClass('active'); 
          $('div.hero-slide[data-slide=' + slide[startindex] + ']').addClass('active').fadeIn();
  
      }, 2500) //End auto slide show
      
      divPagin.click(function(e){

          e.preventDefault();
          clearInterval(autoheroslideshow);
          var currLink = $(this).data('link'); 
          divSlide.removeClass('active').fadeOut();
          divPagin.removeClass('active');
          $('a.hero-pagination[data-link=' + currLink + ']').addClass('active'); 
          $('div.hero-slide[data-slide=' + currLink + ']').addClass('active').fadeIn();
    
      })// End pagination function

      arrow.click(function(e){

          e.preventDefault();
          clearInterval(autoheroslideshow);

          var nextDiv = $('div.hero-slide.active').next(divSlide);
          var nextPagin = $('a.hero-pagination.active').next(divPagin);
          var theIndex = nextDiv.index();

          if (theIndex <= 3) {
              divSlide.not(nextDiv).removeClass('active').fadeOut();
              divPagin.not(nextPagin).removeClass('active');
              nextDiv.addClass('active').fadeIn();
              nextPagin.addClass('active');
                } else {
                  divSlide.not(nextDiv).removeClass('active').fadeOut();
                  divPagin.not(nextPagin).removeClass('active');
                  $('div.hero-slide:first').addClass('active').fadeIn();
                  $('a.hero-pagination:first').addClass('active');
                }

      })// End arrow function
    } //End if statement
  } HeroSlideshow();// End & initialize main HeroSlideshow function


$(window).resize(function() {
 if(!Modernizr.mq('(min-width:440px)') ){
  clearInterval(autoheroslideshow);
  } 
}) //End window resize

$(window).trigger('resize');

}); //End DOM ready 

      

