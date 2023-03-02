import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/Slice/userSlice";
import {Link, useNavigate} from 'react-router-dom'
import { Box, Button, TextField } from "@mui/material";
import "./Register.css"
const Register = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.name!=="" && formData.email!=="" && formData.password!==""){
      dispatch(registerUser(formData));
      navigate("/")
    }
    else{
    alert("please fill all the fields")
    }
  };

  return (
   <div className="wrapper">
<div className="text-center mt-4 name"> Register Page </div>
<form onSubmit={handleSubmit}>
    <Box sx={{ '& .MuiTextField-root': { m: 1,ml:2.5, width: '40ch', maxWidth: '90%' }, }}>

        <div >
          <TextField
          type="text"
          name="name"
          label="Name"
          variant="standard"
          value={formData.name}
          onChange={handleInputChange}
        />
          <TextField   
          type="email"
          name="email"
          label="Email"
          variant="standard"
          value={formData.email}
          onChange={handleInputChange} />
          <TextField   
          type="password"
          label="Password"
          variant="standard"
          name="password"
          value={formData.password}
          onChange={handleInputChange} />
            <Button type="submit" className="btn mt-3" >Register</Button>
            <div className=" sign-up text-center mt-2"> <Link to="/">Sign In</Link></div>
        </div>
    </Box>
</form>
</div>
  );
};

export default Register;
