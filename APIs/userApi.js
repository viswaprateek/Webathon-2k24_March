//create mini-express object
const exp=require("express");
const userApp=exp.Router()

// let users=[];

// //get users
// userApp.get('/get-users',(request,response)=>{
//     response.send({message:"All users",payload:users})
// })




// //get users by id
// userApp.get('/get-user/:id',(request,response)=>{
//     //get id by url
//     let userId=request.params.id;
//     //search the user obj in users array by its id
//     let user=users.find(userObj=>userObj.id==userId);
//     console.log("user is ",user)
//     //send res
//     response.send({messsage:"One user",payload:user})
// })
// //body parser
// userApp.use(exp.json())
// //create user
// userApp.post('/create-user',(request,response)=>{
//     // response.send("User created")
//     // console.log(request.body)
//     let newUser=request.body;
//     users.push(newUser)
//     response.send({message:"User created"})
// })
// //update user
// userApp.put('/update-user',(request,response)=>{
    
//     let modifiedUser=request.body;
//     let indexOfexistingUser=users.findIndex(userObj=>userObj.id===modifiedUser.id)
//     if(indexOfexistingUser===-1){
//         response.send("User  not found!!")
//     }
//     else{
//         users.splice(indexOfexistingUser,1,modifiedUser)
//     response.send("User updated")
//     }
// })
// //delete user
// userApp.delete('/delete-user/:id',(request,response)=>{
//     let userId=request.params.id;
//     let indexOfUserToRemove=users.findIndex(userObj=>userObj.id===userId)
//     users.splice(indexOfUserToRemove,1)
//     response.send("User deleted")
// })

//body parser middleware
const expressAsyncHandler=require("express-async-handler")
const bcryptjs=require("bcryptjs")
const jwt=require('jsonwebtoken')
const verifyToken=require("./middlewares/verifyToken")
const multerObj=require("./middlewares/cloudinaryConfig")

userApp.use(exp.json())

//CREATE user API

//get users
userApp.get("/get-users",expressAsyncHandler(
    async(request,response)=>{
        const userCollectionObj=request.app.get("userCollectionObj")
        //get users from db
        let usersList=await userCollectionObj.find().toArray()
        response.status(200).send({message:"List of users",payload:usersList})
        // .then((usersList)=>{
        //     response.status(200).send({message:"List of users",payload:usersList})
    
        // })
        // .catch(err=>{
        //     console.log("err in createing new user ",err);
        //     response.send({message:"Error",errMessage:err.message})
        // })
    }
))


//get user by id
// userApp.get("/get-user/:id",expressAsyncHandler(
//     async(request,response)=>{
//         const userCollectionObj=request.app.get("userCollectionObj")
//         //get user id from url
//         let userId=(+request.params.id)
//         //find user
//         let userObj=await userCollectionObj.findOne({id:userId})
//         response.status(200).send({message:"User ",payload:userObj})
//         // .then((userObj)=>{
//         //     response.status(200).send({message:"User ",payload:userObj})
//         // })
//         // .catch(err=>{
//         //     console.log("err in createing new user ",err);
//         //     response.send({message:"Error",errMessage:err.message})
//         // })
        
//     }
// ))


//create user(register user)
//public route
userApp.post("/register",multerObj.single('photo'),expressAsyncHandler(
    async(request,response)=>{
        //get userCollectionObj
        const userCollectionObj=request.app.get("userCollectionObj")
        //get newUser from request
        const newUser=JSON.parse(request.body.user);
        //check for duplicate user
        let userOfDB=await userCollectionObj.findOne({username:newUser.username})
        //if already existed,send res to client as "user already existed"
        if(userOfDB!=null){
            response.status(200).send({message:"user already existed"})
        }
        //if user not existed
        else{
            //add cdn link of cloudinary image to user obj
            newUser.image=request.file.path
            //hash the password
            let hashedPassword=await bcryptjs.hash(newUser.password,5)
            console.log("hashed password ",hashedPassword)
           //replace plain pass with hashpassword
           newUser.password=hashedPassword
           //insert user
           await userCollectionObj.insertOne(newUser)
           response.status(201).send({message:"user created"})

        }
           

     //insert user in DB
        // let dbRes=await userCollectionObj.insertOne(newUser)
        // response.status(201).send({message:"user created"})
    
        // .then(
        //     (dbRes)=>{
        //         console.log(dbRes)
        //         response.status(201).send({message:"user created"})
        //     }
        // )
        // .catch(err=>{
        //     console.log("err in createing new user ",err);
        //     response.send({message:"Error",errMessage:err.message})
        // })
    }
));

//get user by username
//make it private route
userApp.get('/get-user/:username',expressAsyncHandler(async(request,response)=>{
    const userCollectionObj=request.app.get("userCollectionObj")
    let usernameFromUrl=request.params.username;
    const userOfDB=await userCollectionObj.findOne({username:usernameFromUrl})
    if(userOfDB===null){
        response.status(200).send({message:"User not found"})
    }
    else{
        delete userOfDB.password
        response.status(200).send({message:"User",payload:userOfDB})
    }
}))


//update user
userApp.put("/update-user",expressAsyncHandler(
    async(request,response)=>{
        //get collection obj
        const userCollectionObj=request.app.get("userCollectionObj")
        //get modified user from client
        let modifiedUser=request.body
        //update user in db
        let dbRes=await userCollectionObj.updateOne({id:modifiedUser.id},{$set:{...modifiedUser}})
        response.status(200).send({message:"user updated"})
        // .then(
        //     response.status(200).send({message:"user updated"})
        // )
        // .catch(err=>{
        //     console.log("err in createing new user ",err);
        //     response.send({message:"Error",errMessage:err.message})
        // })
    }
))


//delete user
// userApp.delete("/delete-user/:id",expressAsyncHandler(
//     async(request,response)=>{
//         //get collection obj
//         const userCollectionObj=request.app.get("userCollectionObj")
//         //get user id from url
//         let userId=(+request.params.id)
//         //delete user
//         let dbRes=await userCollectionObj.deleteOne({id:userId})
//         response.status(200).send({message:"user deleted"})
//         // .then((dbRes)=>{
//         //     response.status(200).send({message:"user deleted"})
//         // })
//         // .catch(err=>{
//         //     console.log("err in createing new user ",err);
//         //     response.send({message:"Error",errMessage:err.message})
//         // })
//     }
// ))

//private routes
//write review
//buy product
//public routes
//searching product
//get review of the product

//user login

userApp.post('/login',expressAsyncHandler(async(request,response)=>{
    const userCollectionObj=request.app.get("userCollectionObj")
    //get user cred from req
    const userCredObj=request.body;
    console.log(userCredObj)
    let userOfDB=await userCollectionObj.findOne({username:userCredObj.username})
    if (userOfDB===null){
        response.status(200).send({message:"Invalid username"})

    }
    else{
        //verify password
        let isEqual=await bcryptjs.compare(userCredObj.password,userOfDB.password)
        if(isEqual===false){
            response.status(200).send({message:"Invalid password"})
        }
        //if password matched
        else{
            //create jwt token
            //sign method will create the token and encode the token
            let jwtToken= jwt.sign({username:userOfDB.username},'abcdef',{expiresIn:20})

            //send token in response
            delete userOfDB.password
            response.status(200).send({message:"success",token:jwtToken,user:userOfDB})
        }

    }
}))

userApp.get('/test',verifyToken,expressAsyncHandler(async(request,response)=>{
    response.send({message:"Reply from private route"})
}))




















//export userApp
module.exports=userApp;