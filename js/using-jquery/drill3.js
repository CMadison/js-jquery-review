$(function(){


    console.log('The dom is ready! (drill 3)');
  // $(".shape").css({'left': leftPosition});
  //
  $( "#block" ).hover(function() {
   $( "#block" ).removeClass( "ball" )
   $("#block").css("background-color","red");
  }, function() {
    $( "#block" ).addClass( "ball" )
    $("#block").css("background-color","#4444CC");

});
//   function() {
//     $( this ).addClass( "hover" );
//   }, function() {
//     $( this ).removeClass( "hover" );
//   }
// ));
// };

});

