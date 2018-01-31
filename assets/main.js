
function renderGallery(){
      

      _.forEach($('.gallery a'),function(element,key){
         $(element).attr("href","/assets/images/omie/p" + key + ".jpg");    
        console.log(element);
            console.log(key);
      });

      _.forEach($('.gallery a img'),function(element,key){
            $(element).attr("src","/assets/images/treisutezece/p" + key + ".jpg");     
            
      });


      
}

renderGallery();
baguetteBox.run('.gallery');