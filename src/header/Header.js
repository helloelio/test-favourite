import './Header.css';
import FilterBlock from './filter/Filter';
import Input from './UI/Input';

function Header(props) {
  const style = {
    left: props.sideBarStatus ? '140px' : '0',
  };

  return (
    <header className='header' style={style}>
      <div className='top-block'>
        <div className='search'>
          <Input type='text' placeholder='Поиск...' className='search-input' />
        </div>
        <div className='personal-info'>
          <span className='personal-name'>Петров В.А.</span>
          <div className='personal-image'> В.А </div>
        </div>
      </div>
      <FilterBlock
        toggleFilter={props.toggleFilter}
        filterStatus={props.filterStatus}
        onChangeName={props.onChangeName}
        onChangeNumber={props.onChangeNumber}
      />
    </header>
  );
}
export default Header;
