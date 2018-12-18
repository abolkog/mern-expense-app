import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'reactstrap';

import { AddForm, Spinner, ExpenseItem } from '../components';
import { fetchExpense } from '../actions/expense_actions';

class HomeComponent extends Component {
  componentDidMount() {
    const { fetchExpense } = this.props;
    fetchExpense();
  }
  render() {
    const { fetching, expense } = this.props;
    if (fetching) {
      return <Spinner />;
    }

    return (
      <div style={{ marginTop: 30 }}>
        <h3>Expense List</h3>
        <hr />
        <ListGroup>
          {expense.map(item => (
            <ExpenseItem key={item._id} item={item} />
          ))}
        </ListGroup>
        <AddForm />
      </div>
    );
  }
}

const mapStateToProps = ({ expense }) => {
  return {
    fetching: expense.fetching,
    expense: expense.expense
  };
};
const Home = connect(
  mapStateToProps,
  { fetchExpense }
)(HomeComponent);
export { Home };
