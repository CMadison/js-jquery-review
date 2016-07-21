$(function(){


    console.log('The dom is ready! (drill 2)');

    $(document).on('keydown',function(event){
        //output to console which key was pressed
        console.log('The user pressed key: ',event.which);
            var leftPosition = $('#square').position().left;
            var topPosition = $('#square').position().top;
            switch(event.which) {
                case 37: // left
                if (leftPosition >= 10) {
                  var leftPosition = leftPosition - 10;
                  console.log(leftPosition);
                  $(".shape").css({'left': leftPosition});
                };
                break;

                case 38: // up
                if (topPosition >= 10) {
                  var topPosition = topPosition - 10;
                  console.log(topPosition);
                  $(".shape").css({'top': topPosition});
                };
                break;

                case 39: // right
                if (leftPosition <=790) {
                  var leftPosition = leftPosition + 10;
                  console.log(leftPosition);
                  $(".shape").css({'left': leftPosition});
                };
                break;

                case 40: // down
                if (topPosition <= 390) {
                  var topPosition = topPosition + 10;
                  console.log(topPosition);
                  $(".shape").css({'top': topPosition});
                };
                break;

                case 83: // down
                  $(".shape").effect( "shake" );
                break;

                default: return; // exit this handler for other keys
            }
            event.preventDefault(); // prevent the default action (scroll / move caret)
        });
});
