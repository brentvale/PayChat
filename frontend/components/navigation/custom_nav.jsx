var React = require('react');
var Link = require('react-router').Link;

var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var NavDropdown = require('react-bootstrap').NavDropdown;
var MenuItem = require('react-bootstrap').MenuItem;

var CustomNav = React.createClass({
  render: function(){
    return(
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"><i><strong>pay</strong>chat</i></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
        
            <NavItem>Signed In as: {this.props.currentUser.first_name}</NavItem>
            <NavItem  href="/users/sign_out"
                      rel="nofollow" 
                      data-method="delete">Sign Out</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
});

module.exports = {
  CustomNav: CustomNav
}