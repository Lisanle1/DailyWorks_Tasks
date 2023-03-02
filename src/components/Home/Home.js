import React from "react";
import { useSelector } from "react-redux";
import Logout from "../Logout/Logout";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Home.css";
import { Container } from "@mui/material";
function Home() {
  const user = useSelector((state) => state.user);
  return (
    <>
      <h2 className="username mt-5">Welcome! {user.name}</h2>
      <div className="container">
        <Container maxWidth="md">
          <div className="logout">
            <Logout />
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 100 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell>Password</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.password}</TableCell>
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </div>
    </>
  );
}

export default Home;
