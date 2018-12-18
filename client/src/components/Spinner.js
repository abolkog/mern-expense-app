import React from 'react';

const Spinner = ({ size }) => {
  let spinnerSize = size ? size : 30;
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
      }}
    >
      <i className='fas fa-spinner fa-spin' style={{ fontSize: spinnerSize }} />
    </div>
  );
};

export { Spinner };
