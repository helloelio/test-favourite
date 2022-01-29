import './Filter.css';
import { useState } from 'react';

function Filter(props) {
  const style = {
    display: props.filterStatus ? 'block' : 'none',
  };
  return (
    <div className='filter'>
      <div className='filter-header'>
        <span className='filter-title'>Filter block</span>
        <button className='filter-btn' onClick={props.toggleFilter}>
          #
        </button>
      </div>
      <div style={style}>dsakdfl;sdkask;ldksal;kdsa</div>
    </div>
  );
}

export default Filter;
