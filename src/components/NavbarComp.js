import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'

const NavbarComp = () => {
    return (
        <Navbar bg="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#home" className="text-white">ReactJs-Dasar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/" className="text-white">Home</Nav.Link>
                <Nav.Link href="/counter" className="text-white">Counter</Nav.Link>
                <Nav.Link href="/modalpage" className="text-white">Modal</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavbarComp
