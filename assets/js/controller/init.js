App.controller('init', function (page) {
  try {
    App.removeFromStack(0,1);
  } catch (e) {}
  $(page).find(".app-button").on('click', function(){
    LH.Cookie.set("init", true);
    App.load("home");
  });
});
