import React from 'react'
import "./Login.css"
import {useForm} from "react-hook-form";
import {useState,useContext,useEffect} from 'react'
import { loginContext } from '../contexts/loginContext'
import { useNavigate } from 'react-router-dom';


function Login() {
  let [currentUser,loginErr,userLoginStatus,loginUser]=useContext(loginContext)
  let{
    register,
    handleSubmit,
    formState:{errors},
  }=useForm();
  //error state
  let [error,setError]=useState("")
  //navigate
  const navigate=useNavigate()
  let loggedinuser=(userCredObj)=>{
    loginUser(userCredObj)
    console.log(userCredObj)
  }
  useEffect(()=>{
    if(userLoginStatus===true){
      navigate('/user-profile')
    }
  },[userLoginStatus])
  return (
    <div>
        <p className='display-3 text-center'>Login!!</p>
        {/* form submission error*/}
        {loginErr.length!==0 && 
        <p className="display-3 text-center text-danger">{loginErr}</p>
        }
        <div className='row'>
          <div className='col-11 col-sm-8 col-md-6 mx-auto'>
            <form onSubmit={handleSubmit(loggedinuser)}>
              {/*username*/}
              <div className='mb-3'>
                <label htmlFor='username'>Username</label>
                <input type="text" id="username" className="form-control"{...register("username",{required:true})} />
              </div>
              {/*password*/}
              <div className='mb-3'>
                <label htmlFor='password'>Password</label>
                <input type="password" id="password" className="form-control"{...register("password",{required:true})} />
              </div>
              <button type="submit" className="btn btn-success">Register</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Login