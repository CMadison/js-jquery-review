$(function(){


    console.log('The dom is ready! (drill 1)');
  $( '#ball' ).click(function() {
    var rand = Math.floor(Math.random() * 300)
    $( "#ball" ).fadeOut( "slow", function() {
    console.log(rand);
    $("#ball").css({'top': rand, 'left': rand});
    $( "#ball" ).fadeIn( "slow", function() {
    });
    });
  });
});

