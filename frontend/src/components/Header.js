import React from 'react';
import {
    Navbar, Nav, NavItem, NavLink
} from 'reactstrap';

const Header = (props) => {

    return (
        <div>
            <Navbar color="light" light expand="md">
                MarkSheet
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/components/">Enter Marks</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/components/">View Leaderboards</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Header;