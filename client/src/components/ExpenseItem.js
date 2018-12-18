import React from 'react';
import { ListGroupItem, Badge } from 'reactstrap';
import moment from 'moment';
const ExpenseItem = ({ item }) => {
  return (
    <ListGroupItem>
      <div className='float-left'>
        <span style={{ marginRight: 5 }}>
          {item.description ? item.description : 'Expense Item'}
        </span>
        <Badge color='dark'>${item.amount}</Badge>
        <div className='text-muted'>{moment(item.created).format('LL')}</div>
      </div>
      <div className='float-right'> Right</div>
    </ListGroupItem>
  );
};

export { ExpenseItem };
