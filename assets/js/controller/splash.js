App.controller('splash', function (page) {
  this.restorable = false;
  setTimeout(function(){
    if (LH.Cookie.get("init")) {
      // in your apps main method
      try {
        // try to restore previous session
        App.restore();
      } catch (err) {
        // else start from scratch
        App.load('home');
      }
    } else {
      App.load("init");
    }
  }, 1500);
});
