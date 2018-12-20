import React, { Component } from 'react';
import moment from 'moment';

const MONTHS = moment.months();

class MonthSelector extends Component {
  handleMonthChanged(e) {
    const { onSelectMonth } = this.props;
    const selected = e.target.value;
    onSelectMonth(selected);
  }
  render() {
    const { selected } = this.props;
    return (
      <div style={{ marginBottom: 20 }}>
        <span>Select Month</span>
        <select value={selected} onChange={this.handleMonthChanged.bind(this)}>
          {MONTHS.map((month, index) => (
            <option value={index} key={index}>
              {month}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export { MonthSelector };
