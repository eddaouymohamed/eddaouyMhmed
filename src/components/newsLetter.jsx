import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";


const NewsLetter = ({ status, message, onvalidated }) => {
    const[email,setEmail]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        email && email.includes('@') && email.indexOf('@')>0 && onvalidated({
            EMAIL:email
        })


    }
    useEffect(()=>{
        if(status==='success'){
            setEmail('')
        }
    })
    return (
        <Col lg={12}   >
            <div className="newsletter-bx wow slideInUp">
                <Row >
                    <Col lg={6} size={12} xl={5}>
                        <h3>Subscribe to our news letter <br /> do not miss the latest updates</h3>
                        {status === 'sending' && <Alert>Sending..... </Alert>}
                        {status === 'error' && <Alert variant="danger"> {message} </Alert>}
                        {status === 'success' && <Alert variant="success">{message}</Alert>}
                    </Col>
                    <Col size={12} xl={7} lg={6}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input type="email" value={email} placeholder="Email Adress" onChange={e => setEmail(e.target.value)} />
                                <button type="submit"> submit </button>
                            </div>



                        </form>

                    </Col>

                </Row>

            </div>

        </Col>
    )
}
export default NewsLetter;