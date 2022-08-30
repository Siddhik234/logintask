
import React, { useState, useEffect } from "react";
import { Card, CardContent, Grid, Button, TextField } from "@mui/material";
import {Link} from "react-router-dom";


export const Login=()=>{
    const [email, setEmail] = useState("");
    const [pass,setPass]=useState("")
    const handlelogin = () => {
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("pass", pass);
    };
    useEffect(() => {
      setEmail(sessionStorage.getItem("email"));
      setPass(sessionStorage.getItem("pass"));
    }, []);
    return (
      <React.Fragment>
        <h1> LOGIN </h1>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                Email:
              </Grid>
  
              <Grid item xs={9}>
                <TextField
                  label="Email"
                  variant="outlined"
                  value={email}
                  fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                password:
              </Grid>
  
              <Grid item xs={9}>
                <TextField
                  label="password"
                  variant="outlined"
                  value={pass}
                  fullWidth
                  onChange={(e) => setPass(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}></Grid>
  
              <Grid item xs={3}>
                <Button variant="contained" onClick={handlelogin}>
                  Login
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Link to="/"> 
                <Button variant="contained"  > Go to Register </Button>
                </Link>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </React.Fragment>
    );
}