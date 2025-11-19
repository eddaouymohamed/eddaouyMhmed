import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../styles/Contact.css';
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { contactMe, removeErrors, removeMessage, removeSuccess } from "../features/contact/contactSlice";



const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const { loading, success, error, message } = useSelector(st => st.contact);
  const dispatch = useDispatch();

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formDetails.email === '') {
      toast.error('email adress must not be empty', { position: 'top-center', autoClose: 3000 });
      return;
    }
    console.log(formDetails);
    dispatch(contactMe(formDetails));
    setTimeout(() => {
      console.log('setileout', { loading, success, error, message })
    }, 3000);
  };
  useEffect(() => {

    if (success) {
      toast.success(message, { position: 'top-center', autoClose: 3000 })
      dispatch(removeSuccess());
      dispatch(removeMessage())
    }
    if (error) {
      toast.error(message, { position: 'top-center', autoClose: 3000 });
      dispatch(removeErrors());
      dispatch(removeMessage())

    }
    // if (message) {
    //   dispatch(removeMessage());
    // }

  }, [success, error])

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button style={{
                          width: '85%',
                          marginInline: 'auto',
                          display: 'block'
                        }} type="submit"><span>{loading ? 'Sending....' : 'Send'}</span></button>
                      </Col>

                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact;















// import { useEffect, useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../assets/img/contact-img.svg";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';
// import '../styles/Contact.css';
// import { contactMe } from "../features/contact/contactSlice";
// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";

// export const Contact = () => {
//   const {error,loading,success,message}=useSelector(st=>st.contact);
//   const formInitialDetails = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: ''
//   }
//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState('Send');
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (category, value) => {
//       setFormDetails({
//         ...formDetails,
//         [category]: value
//       })
//   }
//   const sendMessage=()=>{
//     console.log('send')
//     const myForm={firstName:'mohamed'
//       ,lastName:'eddaouy'
//       ,email:'eddaouymohamed.info@gmail.com'
//       ,message:"haello I'm Here"
//     };
//     contactMe(myForm);

//   }
//   const handleSubmit = async (e) => {
//     useEffect(()=>{
//       if(success){
//         console.log('message sent');
//         toast.success(message,{position:'top-center',autoClose:3000})
//       }

//     },[success])
//     e.preventDefault();
//     setButtonText("Sending...");
//     let response = await fetch("http://localhost:5000/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(formDetails),
//     });
//     setButtonText("Send");
//     let result = await response.json();
//     setFormDetails(formInitialDetails);
//     if (result.code == 200) {
//       setStatus({ succes: true, message: 'Message sent successfully'});
//     } else {
//       setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
//     }
//   };

//   return (
//     <section className="contact" id="connect" >

//      <Container>
//        <Row className="align-items-center">
//          <Col size={12} md={6}>
//           <TrackVisibility>
//              {({ isVisible }) =>
//              <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
//               }
//             </TrackVisibility>
//          </Col>
//            <Col size={12} md={6}>
//            <TrackVisibility>
//             {({ isVisible }) =>
//                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                <h2>Get In Touch</h2>
//                <form onSubmit={handleSubmit}>
//                  <Row>
//                   <Col size={12} sm={6} className="px-1">
//                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
//                      </Col>
//                      <Col size={12} sm={6} className="px-1">
//                      <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
//                    </Col>
//                     <Col size={12} sm={6} className="px-1">
//                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} /> */}
//                      </Col>
//                    <Col size={12} sm={6} className="px-1">
//                     <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
//                   </Col>
//                   <Col size={12} className="px-1">
//                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
//                      <button type="submit"><span>{buttonText}</span></button>
//                    </Col>
//                     {
//                      status.message &&
//                        <Col>
//                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
//                       </Col>
//                      }
//                  </Row>
//                </form>
//             </div>}
//              </TrackVisibility>
//           </Col>
//         </Row>
//      </Container>
//     </section>
//   )
// }




//   return (
//     <section className="contact" id="connect">

//       <Container>
//         <Row className="align-items-center">
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {
//                 ({ isVisible }) => {
//                   <img src={contactImg} alt="Contact Img" className={isVisible ? 'animate__animated animate__zoomIn' : ""} />
//                 }
//               }
//             </TrackVisibility>
//           </Col>

//           <Col size={12} md={6}>
//             <TrackVisibility>{({ isVisible }) => {
//               <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
//                 <h2>Get In Touch</h2>
//                 <form onSubmit={() => console.log('submit')} >
//                   <Row>
//                     <Col size={12} sm={6}>
//                       <input type="text" placeholder="enter your first Name" value={'name'} name="firstName" onChange={() => console.log('changed')} />
//                     </Col>
//                     <Col size={12} sm={6}>
//                       <input type="text" placeholder="enter your last Name" value={'name'} name="lastName" onChange={() => console.log('changed')} />
//                     </Col>
//                     <Col size={12} sm={6}>
//                       <input type="email" placeholder="enter your email Adress" value={'name'}  onChange={() => console.log('changed')} />
//                     </Col>
//                     <Col size={12} sm={6}>
//                       <input type="tel" placeholder="enter your phone Number" value={'name'} name="phone" onChange={() => console.log('changed')} />
//                     </Col>
//                     <Col size={12} >
//                       <textarea rows={6} placeholder="Message" value={'name'} name="message" onChange={() => console.log('changed')} />
//                       <button>
//                         <span>
//                           {buttonText}
//                         </span>
//                       </button>
//                     </Col>


//                   </Row>

//                 </form>

//               </div>

//             }}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>

//     </section>
//   )
// }
// export default Contact;

// */
