
$(document).ready(function(){

$('#telefone').mask("?+7 (999) 999-9999",{placeholder:"_"});
$('#telefone-modal').mask("?+7 (999) 999-9999",{placeholder:"_"});
});

            
$('.thanks-in .modal-content .close').click(function(){
      $('.thanks').fadeOut();
      $('.thanks-in').fadeOut();
   });

