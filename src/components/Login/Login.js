import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { loginUser } from "../../redux/Slice/userSlice";
import { Box, Button, TextField } from "@mui/material";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = useSelector((state) => state.user);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.email === email && formData.password === password){
      dispatch(loginUser(formData));
      setFormData((formData.email = ""));
      setFormData((formData.password = ""));
      navigate("/home");
    } 
    else{
      alert("Invalid email or password");
    }
  };

  return (
    <div className="wrapper">
      <div className="text-center mt-4 name"> Login Page </div>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              ml: 2.5,
              width: "40ch",
              maxWidth: "90%",
            },
          }}
        >
          <div>
            <TextField
              type="email"
              name="email"
              label="Email"
              variant="standard"
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextField
              type="password"
              name="password"
              label="Password"
              variant="standard"
              value={formData.password}
              onChange={handleInputChange}
            />
            <Button type="submit" className="btn mt-3">
              Login
            </Button>
            <div className=" sign-up text-center mt-2">
              <Link to="/register">Sign Up </Link>
            </div>
          </div>
        </Box>
      </form>
    </div>
  );
};

export default Login;
