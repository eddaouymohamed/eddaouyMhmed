import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import '../styles/skills.css';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib//styles.css';
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import arrowLeft from '../assets/img/arrow1.svg';
import arrowRight from '../assets/img/arrow2.svg';
import colorSharp from '../assets/img/color-sharp.png'
import TrackVisibility from 'react-on-screen';
import 'animate.css';
const Skills = () => {
    const items = [
        {
            src: meter1,
            name: 'Web Developement'
        },
        {
            src: meter2,
            name: 'Web Design'
        },
        {
            src: meter3,
            name: 'Logo Design'
        },
        {
            src: meter2,
            name: 'Brand Identity'
        },
        {
            src: meter3,
            name: 'Web Developement'
        },
        {
            src: meter1,
            name: 'Web Developement'
        },
    ]
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        largeDesktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }


    }
    return (
        <section className="skills" id="skills">
            <img src={colorSharp} alt='colorSharp' className="background-image-right" />
            <Container>
                <Row>
                    <Col xs={12} md={12} xl={12}>
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>My skills include creating polished brand identities, engaging landing pages, and scalable e‑commerce solutions, <br></br>  transforming Figma designs into responsive, production‑ready web applications with modern frameworks.  <br></br>seamless user experiences
                with  React, Node.js, Express, and UI frameworks like Bootstrap and Material UI.</p>
                           <TrackVisibility >
                           {({isVisible})=>(
                             <Carousel responsive={responsive} infinite={true} autoPlay={true} className={isVisible ? "animate__animated animate__zoomIn carousel skill-slider":"carousel skill-slider"}>
                                {items.map((item, index) => (
                                    <div className="item" key={index}>
                                        <img src={item.src} alt={item.src} />
                                        <h5>{item.name}</h5>
                                    </div>
                                ))}
                            </Carousel>

                           )}
                           </TrackVisibility>


                        </div>
                    </Col>
                </Row>
            </Container>
<img src={colorSharp} alt='colorSharp' className="background-image-left" />
        </section>
    )
}
export default Skills;
