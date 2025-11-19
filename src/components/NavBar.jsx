// import Container from 'react-bootstrap/Container';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import reactLogo from '../assets/react.svg';
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/youtube.svg';
import navIcon3 from '../assets/img/github-svgrepo-com (2).svg';
import { useEffect, useState } from 'react';
import '../styles/navbar.css';



function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onscroll = () => {
            if (window.scrollY > 50) {
                console.log('scrollyyy', window.scrollY)
                setScrolled(true)
            }
            else {
                setScrolled(false)
                console.log('scrollY', window.scrollY)
            }
        }
        window.addEventListener('scroll', onscroll);
        return () => window.removeEventListener('scroll', onscroll)
    }, [])
    const onUpdateActiveLink = classNameValue => {
        setActiveLink(classNameValue);
    }
    return (
        <Navbar className={scrolled ? 'scrolled' : ""} expand='lg'>
            <Container>
                <Navbar.Brand href="#home">
                    <img className='logo' src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'> </span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} >Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/mohamed-eddaouy-060239281/" target='_blank'> <img src={navIcon1} alt="linkedin" /></a>
                            <a href="https://www.youtube.com/@MohamedEd-daouy-ep1qc" target='_blank'> <img src={navIcon2} alt="youtube" /></a>

                            <a href="https://github.com/eddaouymohamed/" target='_blank'> <img src={navIcon3} alt="github" /></a>
                        </div>
                        <button className='vvc' onClick={() => console.log('connect')}>
                             <a href="#contact" style={{
                                color: 'inherit',
                                display: 'inherit',
                                textDecoration: 'none'
                            }}>
                            <span>let's Connect</span>

                            </a>
                        </button>


                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;