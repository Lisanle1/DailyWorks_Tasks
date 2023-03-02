import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/Slice/userSlice";
function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return <Button onClick={handleClick}>Logout</Button>;
}

export default Logout;
