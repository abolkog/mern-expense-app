import React, { Component } from 'react';

class MonthSelector extends Component {
  handleMonthChanged(e) {
    const { onSelectMonth } = this.props;
    const selected = e.target.value;
    onSelectMonth(selected);
  }
  render() {
    const { selected, months } = this.props;
    return (
      <div style={{ marginBottom: 20 }}>
        <span>Select Month</span>
        <select value={selected} onChange={this.handleMonthChanged.bind(this)}>
          {months.map((month, index) => (
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
