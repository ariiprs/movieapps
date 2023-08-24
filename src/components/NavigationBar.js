import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand>AriePras</Navbar.Brand>
        <Nav>
          <Nav.Link>Trending</Nav.Link>
          <Nav.Link>Superhero</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
