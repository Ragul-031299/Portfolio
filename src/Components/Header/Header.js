import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SchoolIcon from '@mui/icons-material/School';
import InfoIcon from '@mui/icons-material/Info';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import './Header.css'

const Header = () => {
  return (
    <Navbar expand="xl" className='Section_Navbar bg-clr d-flex'>
      <Container>
        <Navbar.Brand href="#home"  className='Section_Navbrand'><ChevronLeftIcon/>Develope<span className='text-danger'>R/</span><ChevronRightIcon/></Navbar.Brand>
        <Navbar.Toggle className='Section_NavbarToggle bg-light'></Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="ms-auto  d-flex Section_Nav">
            <Nav.Link href="#home" className='Section_Navlink text-danger d-flex'><HomeRoundedIcon className='Section_linkIcons text-info fs-4'/>Home</Nav.Link>
            <Nav.Link href="#skills" className='Section_Navlink text-danger d-flex'><PsychologyIcon className='Section_linkIcons text-info fs-4'/>Skills</Nav.Link>
            <Nav.Link href="#education" className='Section_Navlink text-danger d-flex'><SchoolIcon className='Section_linkIcons text-info fs-4'/>Education</Nav.Link>
            <Nav.Link href="#about" className='Section_Navlink text-danger d-flex'><InfoIcon className='Section_linkIcons text-info fs-4'/>About</Nav.Link>
            <Nav.Link href="#contact" className='Section_Navlink text-danger d-flex'><AddIcCallIcon className='Section_linkIcons text-info fs-4'/>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;