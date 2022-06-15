import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import logo from "./img2/5.png";
import "./Login.css";
import Footer from "../footer";

class Login extends React.Component {
  state = {
    credentials: { username: "", password: "" },
  };
  login = (event) => {
    console.log(this.state.credentials);
    fetch("", {
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
      <div className="">
        <Container>
          <Row className="mt-5">
            <img className="img1" src={logo} />
          </Row>
          <Row className="mt-5">
            <Col
              lg={5}
              md={6}
              sm={12}
              className="p-5 m-auto shadow-sm rounded-lg"
            >
              <Form>
                <Form.Group controlId="formBasicusername">
                  <Form.Label>Usuario</Form.Label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Ingrese su Usuario"
                    value={this.state.credentials.username}
                    onChange={this.inputChanged}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Ingrese su contraseña"
                    value={this.state.credentials.password}
                    onChange={this.inputChanged}
                  />
                </Form.Group>

                <Button
                  onClick={this.login}
                  variant="success btn-block"
                  type="submit"
                >
                  Ingresar
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Login;
