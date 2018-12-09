import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { logUserOut } from '../actions';

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
    const { isAuth, logUserOut } = this.props;
    if (isAuth) {
      return (
        <ButtonDropdown
          isOpen={this.state.dropdownOpen}
          toggle={this.toggleButton}
        >
          <DropdownToggle caret color='link' size='sm'>
            Welcome
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => logUserOut() }>
            Logout</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      );
    }

    return (
      <NavItem>
        <NavLink href='/login'>Login</NavLink>
      </NavItem>
    );
  }

  render() {
    return (
      <div>
        <Navbar color='dark' dark expand='md'>
          <NavbarBrand href='/'>MERN Expense</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
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
    isAuth: auth.isAuth
  };
};

const NavBar = connect(mapStateToProps, { logUserOut })(NavBarComponent);
export { NavBar };
