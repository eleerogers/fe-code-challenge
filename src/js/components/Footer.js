import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function Footer() {

  return (
    <Navbar bg="light" sticky="bottom">
      <Container className="pb-1 pt-1">
        <div className="text-muted ml-auto mr-auto">
        © {new Date().getFullYear()}
        </div>
      </Container>
    </Navbar>
  );
}

export default Footer;