import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';

const ErrorMessageComponent = ({ message }) => {
  if (message) {
    return <Alert color='danger'>{message}</Alert>;
  }

  return <div></div>;
};

const mapStateToProps = ({ errors }) => {
  return {
    message: errors.message
  };
};
const ErrorMessage = connect(mapStateToProps)(ErrorMessageComponent);
export { ErrorMessage };
