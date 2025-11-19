import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsLetter from "./newsLetter";



const MailChaimpForm = () => {
    const postUrl = import.meta.env.VITE_MAILCHIMP_URL;
    return (
        <>
            <MailchimpSubscribe url={postUrl}
                render={({ subscribe, status, message }) => (<NewsLetter
                    status={status}
                    message={message}
                    onvalidated={formData => subscribe(formData)}
                />)}


            />
        </>
    )
}
export default MailChaimpForm;