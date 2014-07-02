App.controller('menu', function (page) {
  $(page).on('click', '.rating', function() {
    App.dialog({
      title        : 'レーティング',
      text         : 'よかったら評価してね',
      okButton     : 'App Storeへ',
      cancelButton : 'キャンセル'
    }, function (choice) {
      switch (choice) {
        case 'ok':
          //location.href = 'http://www.apple.com/';
          window.open('http://www.apple.com/', null);
          break;
      }
    });
  });
});
