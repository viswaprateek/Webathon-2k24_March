import React from 'react'
import "./Register.css"
import {useForm} from "react-hook-form";
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Register() {
  let [error,setError]=useState("");
  let [selectedfile,setSelectedFile]=useState(null)
  //navigate
  const navigate=useNavigate();

  let{
    register,
    handleSubmit,
    formState:{errors},
  }=useForm();
  let registerduser=(newUser)=>{
    let fd=new FormData();
    //append newuser to formdata 
    fd.append("user",JSON.stringify(newUser))
    //append selected file to form data
    fd.append("photo",selectedfile)
    //console.log(newUser)
    axios.post("http://localhost:3500/user-api/register",fd)
    .then((response)=>{
      if(response.status===201){
        //navigate to login component
        navigate('/Login')
      }
      if(response.status!=201){
        setError(response.data.message)
      }
    })
    .catch((err)=>{
      if(err.message){
        setError(err.message)
      }
      else if(err.request){
        setError(err.message)
      }
      else{
        setError(err.message)
      }

    })

  }
  const onFileSubmit=(e)=>{
    setSelectedFile(e.target.files[0]);

  }
  return (
    <div>
        <p className='display-3 text-center'>Register Here!</p>
        {error.length!==0 &&(
          <p className="display-3 text-danger text-center">{error}</p>
        )}
        <div className='row'>
          <div className='col-11 col-sm-8 col-md-6 mx-auto'>

            <form onSubmit={handleSubmit(registerduser)}>
              {/*username*/}
              <div className='mb-3'>
                <label htmlFor='username'>Username</label>
                <input type="text" id="username" className="form-control"{...register("username",{required:true})} />
                {errors.username?.type==="required" && <p className='text-danger fw-bold fs-5'>*Username is required</p>

                }
              </div>
              {/*password*/}
              <div className='mb-3'>
                <label htmlFor='password'>Password</label>
                <input type="password" id="password" className="form-control"{...register("password",{required:true})} />
                {errors.password?.type==="required" && <p className='text-danger fw-bold fs-5'>*Password is required</p>}
              </div>
              {/*Email*/}
              <div className='mb-3'>
                <label htmlFor='username'>E-mail</label>
                <input type="email" id="email" className="form-control"{...register("email",{required:true})} />
                {errors.email?.type==="required" && <p className='text-danger fw-bold fs-5'>*E-mail is required</p>}
              </div>
              {/*Date of birth*/}
              <div className='mb-3'>
                <label htmlFor='dateofbirth'>Date-Of-Birth</label>
                <input type="date" id="dateofbirth" className="form-control"{...register("dateofbirth",{required:true})} />
                {errors.dateofbirth?.type==="required" && <p className='text-danger fw-bold fs-5'>*DOB is required</p>}
              </div>
              {/*user image*/}
               <div className='mb-3'>
                <label htmlFor='image'>upload profile</label>
                <input type="file" id="image" className="form-control"{...register("image",{required:true})}
                onInput={onFileSubmit}
                />
                {errors.username?.type==="required" && <p className='text-danger fw-bold fs-5'>*Image is required</p>}
              </div> 
              <button type="submit" className="btn btn-success">Register</button>

            </form>

          </div>

        </div>
    </div>
  )
}

export default Register