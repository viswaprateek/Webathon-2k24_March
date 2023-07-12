// //import http server
// const http=require('http');


// //create request handler
// const requestHandler=(request,response)=>{
//     response.statusCode=200;
//     response.write("This is the response")
//     response.end("This is response from server")
// }
// //create http server object
// const httpServer=http.createServer(requestHandler)
// //assign a port number
// httpServer.listen(3500,()=>{
//     console.log('Server listening on poert number 3500')
// })

//create express app
const exp=require("express");
const { request } = require("http");

const app=exp();

//assign port number
app.listen(3500,()=>{
    console.log("Server listening on port number 3500...")
})
//connect react build 
const path=require("path");
app.use(exp.static(path.join(__dirname,'./build')))



//get mongo client
const mclient=require('mongodb').MongoClient;

//connect to DB server using mongo client
mclient.connect('mongodb://127.0.0.1:27017')
  .then((dbRef) => {
    const dbObj = dbRef.db('b1db');
    //connect to collections of the db
    const userCollectionObj = dbObj.collection("userscollection");
    const productCollectionObj = dbObj.collection("productscollection");
    //share collections to apis
    app.set('userCollectionObj',userCollectionObj)
    app.set('productCollectionObj',productCollectionObj)

    console.log("DB connection success");
  })
.catch((err)=>console.log("database connection error : ",err))




//sample data of users
//let users=[];

//create a middleware

// const middleware1=(request,response,next)=>{
//     console.log("Middleware1 executed")
//     //forward to next 
//    next()
//   // request.send({message:"unauthorised request"})
// }
// const middleware2=(request,response,next)=>{
//     console.log("Middleware2 executed")
//     //forward to next 
//    next()
//   // request.send({message:"unauthorised request"})
// }


// //use middleware1 for every request
// app.use(middleware2)


//create user api

// //get users
// app.get('/get-users',middleware1,(request,response)=>{
//     response.send({message:"All users",payload:users})
// })




// //get users by id
// app.get('/get-user/:id',(request,response)=>{
//     //get id by url
//     let userId=request.params.id;
//     //search the user obj in users array by its id
//     let user=users.find(userObj=>userObj.id==userId);
//     console.log("user is ",user)
//     //send res
//     response.send({messsage:"One user",payload:user})
// })
// //body parser
// app.use(exp.json())
// //create user
// app.post('/create-user',(request,response)=>{
//     // response.send("User created")
//     // console.log(request.body)
//     let newUser=request.body;
//     users.push(newUser)
//     response.send({message:"User created"})
// })
// //update user
// app.put('/update-user',(request,response)=>{
    
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
// app.delete('/delete-user/:id',(request,response)=>{
//     let userId=request.params.id;
//     let indexOfUserToRemove=users.findIndex(userObj=>userObj.id===userId)
//     users.splice(indexOfUserToRemove,1)
//     response.send("User deleted")
// })







//import userApp
const userApp=require("./APIs/userApi")
const productsApp=require("./APIs/productsApi")


//path with user-api

app.use('/user-api',userApp)

//path with products-api
app.use('/products-api',productsApp)
//middleware to deal with page refresh
const pageRefresh=(request,response,next)=>{
  response.sendFile(path.join(__dirname,'./buildindex.html'))

}
app.use("/*",pageRefresh)

//handling invalid paths
const invalidPathmiddleware=(request,response,next)=>{
    response.send({message:"Invalid path"})
}
app.use("*",invalidPathmiddleware)

//error handling middleware
const errorhandlingmiddleware=(error,request,response,next)=>{
    response.send({message:error.message})
}
app.use(errorhandlingmiddleware)
