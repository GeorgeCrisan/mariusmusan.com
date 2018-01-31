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
      
      
            
      }

      function closeMenuAndSticky(){

            $('.navbar-nav>li>a').on('click', function(){
                  $('.navbar-collapse').collapse('hide');
              });
           
              
                // $('#sticker').sticky({topSpacing:0});
              
                  

      }//end of sticky


      
     

closeMenuAndSticky();
      renderGallery();
      baguetteBox.run('.gallery');









});
