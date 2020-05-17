import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Alert,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { signUp } from '../actions/auth_actions';

class SignupPage extends Component {
  componentDidUpdate() {
    const { error, signedUp } = this.props;
    if (error && this.bag) {
      this.bag.setSubmitting(false);
    }

    if (signedUp) {
      this.props.history.push('/login');
    }
  }

  _handleFormSubmit(values, bag) {
    this.props.signUp(values);
    this.bag = bag;
  }

  render() {
    const { error } = this.props;
    return (
      <div style={{ padding: 20 }}>
        <h3>Create new account</h3>
        {error && <Alert color="danger">{error}</Alert>}
        <hr />
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={this._handleFormSubmit.bind(this)}
          validationSchema={Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string()
              .email()
              .required(),
            password: Yup.string()
              .min(6)
              .required(),
          })}
          render={({
            handleChange,
            handleSubmit,
            isValid,
            isSubmitting,
            handleBlur,
            errors,
            touched,
          }) => (
            <div>
              <FormGroup>
                <Label>Name</Label>
                <Input
                  invalid={errors.name && touched.name}
                  name="name"
                  type="string"
                  placeholder="Your Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                {errors.name && touched.name && (
                  <FormFeedback>{errors.name}</FormFeedback>
                )}
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  invalid={errors.email && touched.email}
                  name="email"
                  type="email"
                  placeholder="someone@abolkog.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                {errors.email && touched.email && (
                  <FormFeedback>{errors.email}</FormFeedback>
                )}
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input
                  invalid={errors.password && touched.password}
                  name="password"
                  type="password"
                  placeholder="Your Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password && (
                  <FormFeedback>{errors.password}</FormFeedback>
                )}
              </FormGroup>
              <Button
                color="primary"
                block
                onClick={handleSubmit}
                disabled={!isValid || isSubmitting}
              >
                Create Account
              </Button>
            </div>
          )}
        />
        <Link to="/login">Have an account? Sign In</Link>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    error: auth.error,
    signedUp: auth.signedUp,
  };
};

const Signup = connect(
  mapStateToProps,
  { signUp }
)(SignupPage);
export { Signup };
