import React, {useState} from 'react';
import {Link} from "react-router-dom";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import navs from "./navs";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {
                            navs.map((route) => {
                                return <NavItem key={route.path}>
                                    <Link to={route.path}>
                                        <NavLink>{route.title}</NavLink>
                                    </Link>
                                </NavItem>
                            })
                        }
                        {/*<NavItem>
                            <Link to="/">
                                <NavLink>Anasayfa</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/hakkinda">
                                <NavLink>Hakkimizda</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            
                                <Link to="/tur/golden-retriever">
                                <NavLink>
                                    Goldens
                                    </NavLink>
                                </Link>
                        </NavItem>*/}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;