import { Nav, Navbar } from "react-bootstrap";
import React from 'react';

class NavbarBudget extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const loginEl = ( ! this.props.activeUser)  ?  <Nav.Link href="/#/login">Login</Nav.Link>  : null;
        const signupEl = ( ! this.props.activeUser) ?  <Nav.Link href="/#/signup">Signup</Nav.Link>  : null;
        const logoutEl = (this.props.activeUser) ?  <Nav.Link onClick={this.props.handleLogout}>Logout</Nav.Link> : null;
        return(
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Budget Managment</Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/#/spendingreport">Spending Reports</Nav.Link>
                    <Nav.Link href="/#/categoryreport">Category Reports</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <Nav className="ml-auto">
                        {loginEl}
                        {signupEl}
                        {logoutEl}
                </Nav>
                    <Nav> {this.props.activeUser ? 'Hello ' + this.props.activeUser.fname : ''}</Nav>
                </Navbar>

        );

    }
}


export default NavbarBudget;