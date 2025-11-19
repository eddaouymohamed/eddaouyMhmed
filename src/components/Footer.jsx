import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/youtube.svg';
import navIcon3 from '../assets/img/github-svgrepo-com (2).svg';
import '../styles/Footer.css';
import MailChaimpForm from "./mailchimpForm";


 const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailChaimpForm />
          <Col size={12} sm={6} >
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon pt-2" >
              <a href="https://www.linkedin.com/in/mohamed-eddaouy-060239281/" target="_blank"> <img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.youtube.com/@MohamedEd-daouy-ep1qc" target="_blank"> <img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/eddaouymohamed/" target="_blank"> <img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer;
