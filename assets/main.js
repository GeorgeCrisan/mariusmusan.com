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
            
  
          
   
    
 
closeMenuAndSticky();
      renderGallery();
      baguetteBox.run('.gallery');









});// end of doc ready
