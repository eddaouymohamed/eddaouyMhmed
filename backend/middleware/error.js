import ErrorHandling from "../utils/errorHandling.js"

export default (err,_req,res,_next)=>{
    //  invalid url of mongodb databsejjj
    if(err.name==='CastError'){
        const message=`this is invalid ressource ${err.path}` // invalid path
        err=new ErrorHandling(message,404)
    }
    // error like existing registerd email so the message will be sign in to continue
    if(err.code===11000){
        const message=`the ${Object.keys(err.keyValue)} already exists please sign in to conitue `;
        err=new ErrorHandling(message,400)
    }
    const message=err.meesage;
    const statusCode=err.statusCode;
    res.status(statusCode).json({
        succes:false,
        message:message,

    })
}