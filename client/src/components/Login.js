import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/auth";

const Login = ({ login, auth: { isAuth } }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuth) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Fragment>
      <Grid
        textAlign="center"
        style={{ height: "50vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" color="blue" textAlign="center">
            Connexion
          </Header>

          <Form size="large" onSubmit={e => onSubmit(e)}>
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                name="email"
                iconPosition="left"
                placeholder="Votre adresse email"
                value={email}
                onChange={e => onChange(e)}
              />
              <Form.Input
                fluid
                icon="lock"
                name="password"
                iconPosition="left"
                placeholder="Mot de passe"
                type="password"
                value={password}
                onChange={e => onChange(e)}
              />

              <Button color="blue" fluid size="large">
                Se Connecter
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
