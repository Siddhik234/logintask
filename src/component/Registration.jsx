
import React, { useState, useEffect } from "react";
import { Card, CardContent, Grid, Button, TextField } from "@mui/material";
import {Link} from "react-router-dom";

export const Registration=()=>{
    const [fname, setFname] = useState("");
    const [email, setEmail] = useState("");
    const [pass,setPass]=useState("")
    const [conpass,setConpass]=useState("")
    const handleSubmit = () => {
      sessionStorage.setItem("firstname", fname);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("pass", pass);
      sessionStorage.setItem("conpass", conpass);
    };
    useEffect(() => {
      setFname(sessionStorage.getItem("firstname"));
      setEmail(sessionStorage.getItem("email"));
      setPass(sessionStorage.getItem("pass"));
      setConpass(sessionStorage.getItem("conpass"));
    }, []);
    return (
      <React.Fragment>
        <h1> Register Here</h1>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                Full Name:
              </Grid>
  
              <Grid item xs={9}>
                <TextField
                  label="Full Name"
                  variant="outlined"
                  value={fname}
                  fullWidth
                  onChange={(e) => setFname(e.target.value)}
                />
              </Grid>
  
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
                set password:
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
              <Grid item xs={3}>
                confirm password:
              </Grid>
  
              <Grid item xs={9}>
                <TextField
                  label="confirm password"
                  variant="outlined"
                  value={conpass}
                  fullWidth
                  onChange={(e) => setConpass(e.target.value)}
                />
              </Grid>
  
              <Grid item xs={3}></Grid>
  
              <Grid item xs={3}>
                <Button variant="contained" onClick={handleSubmit}>
                  Submit
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Link to="/login"> 
                <Button variant="contained"  > Go to Login </Button>
                </Link>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </React.Fragment>
    );
}