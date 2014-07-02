App.controller('home', function (page) {
  try {
    App.removeFromStack(0,1);  
  } catch (e) {}
  console.log('home');
});
