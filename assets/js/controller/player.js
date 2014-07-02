App.controller('player', function (page) {
  $(page).on('appShow', function(){
    $(this).find('audio').attr('src', 'assets/media/01.mp3');
  });
});
