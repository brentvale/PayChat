var ServerActions = require('../actions/serverActions.js');

module.exports = {
  //USERS
  fetchCurrentUser: function(){
    $.ajax({
      url: "api/users/fetch_current_user",
      method: "GET",
      success: function(userObj){
        //return message if no current user
        ServerActions.receiveCurrentUser({currentUser: userObj.current_user});
      },
      error: function(){
        console.log("errored out in fetchCurrentUser")
      }
    });
  },
  signOutCurrentUser: function(callback){
    $.ajax({
      url: "api/users/sign_out",
      method: "GET",
      success: function(message){
        ServerActions.signOutSuccess({message: message});
      },
      error: function(resp){
        console.log("errored out in signOutCurrentUser");
      }
    });
  },
}
