var LH = {
  Cookie: {
    options: {
      path: '/',
      expire: 365
    },
    get: function (key) {
      try {
        return JSON.parse($.cookie(key));
      } catch (err) {
        return;
      } 
    },
    set: function (key, val, options) {
      if (!options) {
        options = this.options;
      }
      $.cookie(key, JSON.stringify(val), options);
    },
    remove: function (key) {
      $.removeCookie(key);
    }
  }
};
