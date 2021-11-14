import React, { Component } from "react";
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends Component {
  render() {
    return (
    <Navbar color="light" expand="md" light>
        <NavbarBrand href="/" className="ms-lg-5">
            Arthur Allilaire
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck(){}} />
        <Collapse navbar>
            <Nav className="ms-auto me-lg-5" navbar>
                <UncontrolledDropdown inNavbar nav>
                    <DropdownToggle caret nav>
                        Computer Science
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            Courses
                        </DropdownItem>
                        <DropdownItem>
                            Articles
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown inNavbar nav>
                    <DropdownToggle caret nav>
                        Projects
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            Minesweeper
                        </DropdownItem>
                        <DropdownItem>
                            Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            Resume
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown inNavbar nav>
                    <DropdownToggle caret nav>
                        Other Articles
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            Minesweeper
                        </DropdownItem>
                        <DropdownItem>
                            Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            Resume
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">
                        About me
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">
                        GitHub
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="" href="https://github.com/reactstrap/reactstrap" color="danger" outline >
                        Log in
                    </NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
    );
  }
}

export default Header;