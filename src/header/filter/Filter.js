import './Filter.css';
import Input from '../UI/Input';
import GearImage from '../assets/filter-gear.svg';

function Filter(props) {
  const style = {
    display: props.filterStatus ? 'grid' : 'none',
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
        <Input type='text' placeholder='Имя клиента' className='filter-input' />
        <Input type='text' placeholder='Телефон' className='filter-input' />
        <Input type='text' placeholder='Имя клиента' className='filter-input' />
        <Input type='text' placeholder='Телефон' className='filter-input' />
      </div>
    </div>
  );
}

export default Filter;
