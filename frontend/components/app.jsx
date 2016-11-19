var React = require('react');

var UserStore = require('../stores/user.js');
var ClientActions = require('../actions/clientActions.js');

var CustomNav = require('./navigation/custom_nav.jsx').CustomNav;
var UserShow = require('./users/show.jsx').UserShow;

var App = React.createClass({
  getInitialState: function(){
    return { currentUser: UserStore.currentUser() }
  },
  componentDidMount: function(){
    this.appUserListener = UserStore.addListener(this._onChange);
    ClientActions.fetchCurrentUser();
  },
  componentWillUnmount: function(){
    this.appUserListener.remove();
  },
  _onChange: function(){
    this.setState({ currentUser: UserStore.currentUser() });
  },
  render: function(){
    
    return(
      <div>
        <CustomNav currentUser={this.state.currentUser}/>
        <UserShow currentUser={this.state.currentUser}/>
      
        {this.props.children}
      </div> 
    )
  }
});

module.exports = {
  App: App
}