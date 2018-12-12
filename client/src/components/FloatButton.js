import React from 'react';

const FloatButton = ({ onClick }) => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 40,
        right: 40,
        cursor: 'pointer'
      }}
    >
      <div
        style={{
          borderRadius: 50,
          width: 60,
          height: 60,
          background: '#3972F5',
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          boxShadow: '2px 2px 3px #999'
        }}
        onClick={onClick}
      >
        <i className='fa fa-plus' />
      </div>
    </div>
  );
};

export { FloatButton };
