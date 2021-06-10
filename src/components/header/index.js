import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './header.css';
import logo from '../../assets/Group 228.png';

const navPaths = [
  { text: 'Home', link: '/', path: '/' },
  { text: 'Products', link: '/', path: '/products' },
  { text: 'Blog', link: '/', path: '/blog' },
  { text: 'About us', link: '/', path: '/about' },
];

function Header() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <header>
      <Navbar collapseOnSelect expand='lg'>
        <Container className='d-flex'>
          <Nav.Link className='d-flex align-items-center' href=''>
            <Image src={logo} className='logo-image' />
            <span className='brand-name'>organic</span>{' '}
          </Nav.Link>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ml-auto'>
              {navPaths.map((element) => (
                <Navlink key={element.text} {...element} currentPath={path} />
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

function Navlink(props) {
  let customClass = 'nav-item ';
  if (props.currentPath === props.path) {
    customClass += 'active ';
  }
  if (props.path === '/contact') {
    customClass += 'primary-border ';
  }
  return (
    <Nav.Link className={customClass} href={props.link}>
      {props.text}
    </Nav.Link>
  );
}

export default Header;
