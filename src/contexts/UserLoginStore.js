import React,{ useState } from "react"
import axios from "axios"
import { loginContext } from "./loginContext"
function UserLoginStore({children}){
    let [loginErr,setLoginErr]=useState("")
    let [currentUser,setCurrentUser]=useState({})
    let [userLoginStatus,setUserLoginStatus]=useState(false)
    const logoutUser=()=>{
        localStorage.clear()
        setUserLoginStatus(false)
    }
    //function to make user login request
    const loginUser=(userCredObj)=>{
        axios.post("http://localhost:3500/user-api/login",userCredObj)
        .then((response)=>{
            if(response.data.message==="success"){
                //navigate to user-profile
                //save token to local browser
                localStorage.setItem("token",response.data.token)
                setCurrentUser({...response.data.user})
                setLoginErr("")
                setUserLoginStatus(true)
                //console.log("navigate to user profile");
            }
            else{
                //console.log("user login failed",err)
                setLoginErr(response.data.message)
            }
        })
        .catch((err)=>{
            console.log("err in user login",err)
            setLoginErr(err.message)
        }

        )
    
        
    }
    return(
        <loginContext.Provider value={[currentUser,loginErr,userLoginStatus,loginUser,logoutUser]}>
            {children}
        </loginContext.Provider>
    )

}
export default UserLoginStore