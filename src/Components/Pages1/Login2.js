import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import logo from "./img2/9.jpg";
import logo2 from "./img2/Logo.png";
import "./Login.css";
import Footer from "../footer";
import { Grid, TextField } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons";
import LockOpenIcon from "@material-ui/icons";

class Login2 extends React.Component {
  state = {
    credentials: { username: "", password: "" },
  };
  login = (event) => {
    console.log(this.state.credentials);
    fetch("http://127.0.0.1/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.credentials),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data.token);
      })
      .catch((err) => console.error(err));
  };
  inputChanged = (event) => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({ credentials: cred });
  };

  render() {
    return (
      <div>
        <Grid container style={{ minHeight: "10rem" }}>
          <Grid item xs={12} sm={6}>
            <img
              src={logo}
              style={{
                width: "100%",
                height: "60%",
                objectFit: "cover",
              }}
              alt="brand"
            />
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={6}
            alignItems="center"
            direction="column"
            style={{ padding: 10 }}
          >
            <div />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: 400,
                minWidth: 300,
              }}
            >
              <Grid container justifyContent="center">
                <img src={logo2} width={150} alt="logo" />
              </Grid>
              <TextField
                type="text"
                name="username"
                label="Usuario"
                margin="normal"
                value={this.state.credentials.username}
                onChange={this.inputChanged}
              />
              <TextField
                label="Contraseña"
                margin="normal"
                type="password"
                name="password"
                value={this.state.credentials.password}
                onChange={this.inputChanged}
              />
              <div style={{ height: 20 }} />
              <Button variant="contained" onClick={this.login} type="submit">
                Ingresar
              </Button>
              <div style={{ height: 20 }} />
              <Button variant="contained">Registrate</Button>
            </div>
            <div />
          </Grid>
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default Login2;
