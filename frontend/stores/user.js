var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userConstants.js');
var UserStore = new Store(AppDispatcher);

var _currentUser = {};

var addCurrentUser = function(currentUser){
  if(currentUser){
    _currentUser = currentUser;
  } else {
    _currentUser = {};
  }
};

UserStore.currentUser = function(){
  if(Object.keys(_currentUser).length === 0 && _currentUser.constructor === Object){
    return false;
  } else {
    return _currentUser;
  }
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.CURRENT_USER_RECEIVED:
      addCurrentUser(payload.currentUser);
      UserStore.__emitChange();
      break;
  }
}

module.exports = UserStore;