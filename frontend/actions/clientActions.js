var ApiUtil = require('../util/apiUtil.js');

module.exports = {
  //USERS
  fetchCurrentUser: function() {
    ApiUtil.fetchCurrentUser();
  },
  signOutCurrentUser: function(callback) {
    ApiUtil.signOutCurrentUser(callback);
  },
}
