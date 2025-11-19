
import handleAsyncErrors from "../middleware/handleAsyncErrors.js"
import ErrorHandling from "../utils/errorHandling.js";
import { sendMail } from "../utils/sendMail.js";

export const  contactMeController=handleAsyncErrors(async(req,res,next)=>{
    const {firstName,lastName,email,message}=req.body;
    console.log('body is:',req.body);

    const success=sendMail({
        email,
        subject:'Contact Message',
        message:`${message } \n\n ${lastName} ${firstName} \n${email}`,
        html:message+'<br><br>'+'<strong>'+lastName+' '+firstName+'</strong>'+'<br>'+'<i>'+'email'+'</i>'

    })
    if(!success){
        return  next (new ErrorHandling("mail did'nt sent try again",500));
    }
    //
    res.status(200).json({
        success:true,
        message:`message sent succesfully to ${email}`,
    })
})