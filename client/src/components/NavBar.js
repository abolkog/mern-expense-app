import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { logUserOut } from '../actions/auth_actions';

class NavBarComponent extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
    this.state = {
      isOpen: false,
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleButton() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  _renderLoginOrLogout() {
    const { isAuth, logUserOut, profile } = this.props;
    if (isAuth) {
      return (
        <ButtonDropdown
          isOpen={this.state.dropdownOpen}
          toggle={this.toggleButton}
        >
          <DropdownToggle
            caret
            color="link"
            size="sm"
            style={{ color: '#fff' }}
          >
            Welcome, {profile.name}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              style={{ cursor: 'pointer' }}
              onClick={() => logUserOut()}
            >
              Logout
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      );
    }

    return (
      <NavItem>
        <Link style={{ color: '#fff' }} to="/login">
          Login
        </Link>
      </NavItem>
    );
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <Link className="navbar-brand" to="/">
            MERN Expense
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this._renderLoginOrLogout()}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    isAuth: auth.isAuth,
    profile: auth.profile
  };
};

const NavBar = connect(
  mapStateToProps,
  { logUserOut }
)(NavBarComponent);
export { NavBar };
