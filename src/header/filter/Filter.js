import './Filter.css';
import Input from '../UI/Input';
import GearImage from '../assets/filter-gear.svg';
import { useState } from 'react';

function Filter(props) {
  const [size, setSize] = useState(document.documentElement.clientWidth);

  window.addEventListener('resize', () => {
    setSize(document.documentElement.clientWidth);
  });

  const style = {
    top: props.filterStatus
      ? '40px'
      : !props.filterStatus && size <= 1050
      ? '-135px'
      : '-60px',
    transition: props.filterStatus ? '0.3s ease-in-out' : '',
  };

  const animationGear = {
    transform: props.filterStatus ? 'rotate(90deg)' : '',
    transition: '0.3s ease-in-out',
  };

  return (
    <div className='filter'>
      <div className='filter-header'>
        <span className='filter-title'>Filter block</span>
        <button className='filter-btn' onClick={props.toggleFilter}>
          <img src={GearImage} alt='' style={animationGear} />
        </button>
      </div>
      <div style={style} className='filter-block'>
        <Input type='date' placeholder='Дата от' className='filter-input' />
        <Input type='date' placeholder='Дата до' className='filter-input' />
        <Input type='date' placeholder='Дата от' className='filter-input' />
        <Input type='date' placeholder='Дата до' className='filter-input' />
        <Input
          type='text'
          placeholder='Имя клиента'
          className='filter-input'
          onChange={props.onChangeName}
        />
        <Input
          type='text'
          placeholder='Телефон'
          className='filter-input'
          onChange={props.onChangeNumber}
        />
        <Input
          type='text'
          placeholder='Имя клиента'
          className='filter-input'
          onChange={props.onChangeName}
        />
        <Input
          type='text'
          placeholder='Телефон'
          className='filter-input'
          onChange={props.onChangeNumber}
        />
      </div>
    </div>
  );
}

export default Filter;
