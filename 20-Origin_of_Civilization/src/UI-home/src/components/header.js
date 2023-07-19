import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown} from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import LOGO from '../assets/images/LOGO2.png';
import 'bootstrap/dist/css/bootstrap.min.css';



function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={LOGO} width={25} height={25} alt='' />
          
          <a href='https://app.civi.ink' target='_blank' rel="noreferrer">Origin of Civilization</a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="https://app.civi.ink" target='_blank'>App</Nav.Link>

            {/* <Nav.Link href="#about">About</Nav.Link> */}
            {/* <Nav.Link href="#services">Game</Nav.Link> */}
            {/* <Nav.Link href="#works">Works</Nav.Link> */}
            <Nav.Link href="#teams">Teams</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#timeline">Roadmap</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Dropdown >
                  {/* <DropdownItem href="#">Learn React</DropdownItem> */}
                <DropdownToggle class="btn btn-secondary dropdown-toggle"  id="dropdownMenuButton">Docs</DropdownToggle>
                <DropdownMenu className="dropdown-link">
                  <DropdownItem href="https://link.civi.ink" target='_blank'>LinkTree</DropdownItem>
                  <DropdownItem href="#" target='_blank'>Tutorials</DropdownItem>
                  <DropdownItem href="https://docs.google.com/document/d/176AHYa5tgr4Xj3l-uJP8lhfsfKNEC-tpyjK0zGTm0y8/edit?usp=sharing" target='_blank'>Paper_en</DropdownItem>
                  <DropdownItem href="https://docs.google.com/document/d/1PcT9n7Fmb_Pbm7gxE9--fM7pASo_6KSmH8ORbvA_MTI/edit?usp=sharing" target='_blank'>Paper_zh</DropdownItem>
                  <DropdownItem href="https://docs.google.com/document/d/1p6FZEUQgZm83SHgDN1Ncdb3JKJ_9p1Z5K1SWI8RKN8o/edit?usp=sharing" target='_blank'>Paper_ru</DropdownItem>
                  <DropdownItem href="https://docs.google.com/document/d/1OhklvamA89hV0-QC5-oY80xT6ZV6lq8nzOuH0BAqyFc/edit?usp=sharing" target='_blank'>Paper_ko</DropdownItem>
                  <DropdownItem href="https://docs.google.com/document/d/1-GtLdFlUB9JSr0I1hgsouHR-g5EwKYMlK-MUsUeB6v0/edit?usp=sharing" target='_blank'>Paper_jp</DropdownItem>
                  <DropdownItem href="https://docs.google.com/document/d/1oK2m6vnmCH9tXfSw9LYGHHilFINGDkHXOlr2bKwCZlo/edit?usp=sharing" target='_blank'>Paper_ar</DropdownItem>
                  <DropdownItem href="https://docs.google.com/document/d/19fFK27fwKSt2DAMhS81CTVjZf1nONAoUDCkT8XnptLA/edit?usp=sharing" target='_blank'>Paper_de</DropdownItem>

                </DropdownMenu>
            </Dropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;