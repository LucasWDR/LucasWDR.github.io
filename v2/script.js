$(document).ready(function(){
  
   $("section").load('home.html');  

    $("#home").click(function(){
      $("section").load('home.html');  
    });    

    $("#sobre").click(function(){
        $("section").load('sobre.html');  
      }); 

    $("#cadastro").click(function(){
        $("section").load('cadastro.html');  
      }); 
    
    $("#produtos").click(function(){
        $("section").load('produtos.html');  
      }); 
});
