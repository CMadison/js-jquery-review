$(function(){




    console.log('The dom is ready! (drill 4)');

    //shuffle shapes on first load
    shuffleShapes();
    //shuffle shapes on click of shuffle button
    $('#shuffleThem').on('click',shuffleShapes);
    // $('#doIt').on('click',sortShapes);



});

// var sortShapes = function(){
//   var sortValue = $( "#whoDo" ).val();
//   var whatDo = $( "#whatDo" ).val();

//   switch (event) {
//       case blue: // left
//       if (leftPosition >= 10) {
//         var leftPosition = leftPosition - 10;
//         console.log(leftPosition);
//         $(".shape").css({'left': leftPosition});
//       };
//       break;

//       case 38: // up
//       if (topPosition >= 10) {
//         var topPosition = topPosition - 10;
//         console.log(topPosition);
//         $(".shape").css({'top': topPosition});
//       };
//       break;
// }




//used to shuffle shapes
var shuffleShapes = function(){
    //loop through each shape (this is jQuery's each not to be confused with Array.forEach())
    $('.shape').each(function(idx){
        //find a valid random position within the bounds of the stage
        var newLeft = Math.floor(Math.random() * ($('.stage').width()-$(this).width()));
        var newTop = Math.floor(Math.random() * ($('.stage').height()-$(this).height()))
        //update the items to their new positions
        $(this).html(idx).animate({left:newLeft+'px',top:newTop+'px'},1000);
    });
}
