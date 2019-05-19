import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'reactstrap';
import moment from 'moment';

import {
  AddForm,
  Spinner,
  ExpenseItem,
  MonthSelector,
  Statistics
} from '../components';
import { fetchExpense, deleteExpense } from '../actions/expense_actions';

const MONTHS = moment.months();

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: moment().month()
    };
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount() {
    this.getExpense();
  }

  onSelectMonth(month) {
    this.setState({ selected: month });
    this.getExpense(month);
  }

  getExpense(month) {
    const { fetchExpense } = this.props;
    fetchExpense(month);
  }

  onDelete(e) {
    const expenseId = e.target.attributes.getNamedItem('data-id').value;
    const { deleteExpense } = this.props;
    deleteExpense(expenseId);
  }

  render() {
    const { selected } = this.state;
    const { fetching, expense, statistics } = this.props;
    if (fetching) {
      return <Spinner />;
    }

    return (
      <div style={{ marginTop: 30 }}>
        <MonthSelector
          months={MONTHS}
          onSelectMonth={this.onSelectMonth.bind(this)}
          selected={selected}
        />
        <h3>Expense List</h3>
        <hr />

        <Statistics data={statistics} />
        <hr />

        <ListGroup>
          {expense.map(item => (
            <ExpenseItem key={item._id} item={item} onDelete={this.onDelete} />
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
    expense: expense.expense,
    statistics: expense.statistics
  };
};
const Home = connect(
  mapStateToProps,
  { fetchExpense, deleteExpense }
)(HomeComponent);
export { Home };
