function restart(){
    location.reload()
}
 
$(document).ready(function(){
    $("#send").on("click", function(){
      var sum = 0;
      $('.price').each(function() {
          var price = parseInt($(this).text());
          var q = $(this).closest('tr').find('.quantity').val();
          sum += price * q;
         
  
      });
      nom=document.getElementById("nom").value;
      addresse=document.getElementById("addresse").value;
      ncb=document.getElementById("ncb").value;
      parCarteBancaire=document.getElementById("ncb").disabled;

      if(nom=="" || addresse=="" || (parCarteBancaire==false && ncb=="") || sum<=0){
          alert("Vérifiez que vous avez renseigné votre nom,votre addresse,votre numero de carte bancaire si vous souhaitez payer par carte, et vérifiez aussi que vous avez selectionnez au moins une pizza")
      }
      else{

      $('#total_price').remove()
      $('#send').remove()
    $('#last').after("<p id=\"total_price\">Merci de votre visite, le montant de votre commande est :"+sum+"dh</p><br><button id='restart' class='btn btn-primary' style='border: solid 1px;' onclick='restart()'>Effectuer une nouvelle commande</button>")
    
      }

     

    });
  

   
  
      
  });