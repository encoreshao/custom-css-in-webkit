$(function(){
  $("#rotate-card").on('click', function(){
    if ($('#card').hasClass('rotate')) {
      $('#card').removeClass('rotate');
    } else {
      $('#card').addClass('rotate');
    }
  });

  $("#move-card").on('click', function(){
    if ($('#card').hasClass('absolute')) {
      $('#card').css({ position: 'inherit' }).animate({ top: 0 }, 800, function() {
        $('#card').removeClass('absolute')
      });
    } else {
      $('#card').css({ position: 'absolute' }).animate({ top: 100, left: 30 }, 800, function() {
        $('#card').addClass('absolute')
      });
    }
  });
});
