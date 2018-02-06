$('document').ready(function(){
      function renderGallery(){
      

            _.forEach($('.gallery a'),function(element,key){
               $(element).attr('href','assets/images/omie/p' + key + '.jpg');    
              console.log(element);
                  console.log(key);
            });
      
            _.forEach($('.gallery a img'),function(element,key){
                  $(element).attr('src','assets/images/treisutezece/p' + key + '.jpg');     
                  
            });          
      } //end of render Gallery

      function closeMenuAndSticky(){

            $('.navbar-nav>li>a').on('click', function(){
                  $('.navbar-collapse').collapse('hide');
              });
           
              
                // $('#sticker').sticky({topSpacing:0});
              
            
      }//end of sticky
 
      $('.gallery-custom a img').on('click',function(){
            $('body').addClass('special-overflow');
            });  
            
   
        // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});    
          
   
    
 
closeMenuAndSticky();
      renderGallery();
      baguetteBox.run('.gallery');









});// end of doc ready
