import { ArrowRight } from '@mui/icons-material';
import '../styles/banner.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import HaederImg from '../assets/img/header-img.svg';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import { useState, useEffect } from 'react';

const Banner = () => {
    const [paddingTop, setPaddingTop] = useState(76);
    const titles = [ "Web Developer", "Web Designer", "UI/UX Designer"];
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [titleIndex, setTitleIndex] = useState(0);
    const typingSpeed = 150;


;
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setPaddingTop(width >= 992 ? 99 : 76);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    useEffect(() => {
        let timeoutId;
        const type = () => {
        if(index<titles[titleIndex].length){
            timeoutId=setTimeout(() => {
                setDisplayedText(prev=>prev+titles[titleIndex].charAt(index));
                setIndex(index+1)

            }, typingSpeed);
        }
            else {
               setTimeout(() => {
                   setIndex(0)
                   setDisplayedText('');
                setTitleIndex((titleIndex + 1) % titles.length)
               }, 1500);
            }

        }
        type();
        return () => clearTimeout(timeoutId);
    }, [index, titleIndex])
    return (
        <>
            <section className='banner' id='home' style={{ paddingTop: paddingTop + 'px', minHeight: '100vh' }}>
                <Container>
                    <Row className='align-items-center force-row' >
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <Col xs={12} md={6} xl={7}>
                                    <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                                        <span className="tagline">Welcome to My Portfolio </span>
                                        <h1>
                                            <span> Hi I'm Mohamed</span> <span className='dispalyed-text'> {isVisible && displayedText}</span>
                                        </h1>
                                        <p>I am a passionate Full‑Stack MERN Developer with a Computer Science degree, dedicated to building user‑friendly and attractive web applications. My expertise spans React, Node.js, Express, and modern UI frameworks like Bootstrap and Material UI. I focus on enhancing projects, improving user experience, and integrating secure solutions such as Stripe payments.</p>
                                        <button>
                                            <a href="#contact" style={{
                                                color:'inherit',
                                                display:'inherit',
                                                textDecoration:'none'
                                            }}>
                                                <span>
                                                let's Connect
                                            </span>
                                            <ArrowRight />
                                            </a>
                                        </button>
                                    </div>
                                </Col>
                            )}
                        </TrackVisibility>
                        <Col xs={12} md={6} xl={5}>
                            <div>
                                <TrackVisibility>
                                    {({ isVisible }) => (
                                        <div className={isVisible ? 'animate__animated animate__zoomIn parentDivImg' : "parentDivImg"}>
                                            <img src={HaederImg} alt='headerImg' />
                                        </div>
                                    )}
                                </TrackVisibility>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Banner;