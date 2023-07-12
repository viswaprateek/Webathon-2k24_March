const jwt=require('jsonwebtoken')

const verifyToken=(request,response,next)=>{

    //get authorisation key from req.headers
    const bearerToken=request.headers.authorization;//Bearer:token
    //if bearer token not found
    if(bearerToken===undefined){
        response.send({message:"unauthorised access please login first..."})

    }
    else{
        //get token from bearer token
        const token=bearerToken.split(" ")[1]//["bearer",token]
        //verify token
        try{
            jwt.verify(token,"abcdef")
            next()
        }
        catch(err){
            next(new Error("Session Expired please relogin to continue"))
        }

    }
}
module.exports=verifyToken;