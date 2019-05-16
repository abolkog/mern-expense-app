import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormBody } from '../components';
import { updateExpense, resetSaved } from '../actions/expense_actions';

class EditComponent extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidUpdate() {
    const { updated, resetSaved, history } = this.props;
    if (updated) {
      resetSaved();
      history.push('/');
    }
  }

  onSubmit(values, bag) {
    const item = this.props.location.state.item;
    values._id = item._id;
    this.props.updateExpense(values);
    this.bag = bag;
  }

  render() {
    const { history, location } = this.props;
    let item;
    try {
      item = location.state.item;
    } catch (e) {
      item = undefined;
    }
    if (!item) history.push('/');

    return (
      <div style={{ marginTop: 30 }}>
        <h3>Edit Expense</h3>
        <hr />

        <FormBody
          onSubmit={this.onSubmit}
          btnTxt="Update Expense"
          expense={item}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ expense }) => {
  return {
    updated: expense.updated
  };
};

const Edit = connect(
  mapStateToProps,
  { resetSaved, updateExpense }
)(EditComponent);
export { Edit };
