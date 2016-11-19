var React = require('react');

var UserShow = React.createClass({
  render: function(){
    if(!this.props.currentUser){
      return <div>Not yet signed in...</div>;
    }
    return(
      <div className="col-xs-12" >
        <div className="profile-image-container">
          <i className="fa fa-user-circle" aria-hidden="true"></i>
        </div>
        <div><span>user_id:</span> {this.props.currentUser.id}</div>
        <div><span>first_name:</span> {this.props.currentUser.first_name}</div>
        <div><span>last_name:</span> {this.props.currentUser.last_name}</div>
        <div><span>email:</span> {this.props.currentUser.email}</div>
        <div><span>created_at:</span> {this.props.currentUser.created_at}</div>
        <div><span>updated_at:</span> {this.props.currentUser.updated_at}</div>
      </div>
    )
  }
});

module.exports = {
  UserShow: UserShow
}