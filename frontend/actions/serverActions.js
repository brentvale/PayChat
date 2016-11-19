var Dispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userConstants.js');

module.exports = {
  //USERS
  receiveCurrentUser: function (options){
    Dispatcher.dispatch({
      actionType: UserConstants.CURRENT_USER_RECEIVED,
      currentUser: options.currentUser
    });
  },
  signOutSuccess: function(message){
    Dispatcher.dispatch({
      actionType: UserConstants.SIGN_OUT_SUCCESSFUL,
      message: message
    });
  },
}
