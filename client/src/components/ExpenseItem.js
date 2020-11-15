import React from 'react';
import { ListGroupItem, Badge, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseItem = ({ item, onDelete }) => {
  const API_ENDPOINT = process.env.API_ENDPOINT || 'http://localhost:5000';
  return (
    <ListGroupItem>
      <div className="float-left">
        <span style={{ marginRight: 5 }}>
          {item.description ? item.description : 'Expense Item'}
        </span>
        <Badge color="dark">${item.amount}</Badge>
        <div className="text-muted">{moment(item.created).format('LL')}</div>
        {item.receipt && (
          <div className="text-muted">
            <a href={`${API_ENDPOINT}/${item.receipt}`} target="_blank">
              <i className="fas fa-link"></i>
              View Receipt
            </a>
          </div>
        )}
      </div>
      <div className="float-right">
        <Link
          to={{
            pathname: '/edit',
            state: { item },
          }}
          className="btn btn-secondary btn-sm"
        >
          Edit
        </Link>
        &nbsp;
        <Button color="danger" size="sm" onClick={onDelete} data-id={item._id}>
          Delete
        </Button>
      </div>
    </ListGroupItem>
  );
};

export { ExpenseItem };
