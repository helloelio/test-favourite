import './Header.css';
import FilterBlock from './filter/Filter';

function Header(props) {
  const style = {
    left: props.sideBarStatus ? '140px' : '0',
  };

  return (
    <header className='header' style={style}>
      <div className='top-block'>
        <div className='search'>
          <input type='text' className='search-input' placeholder='Поиск...' />
        </div>
        <div className='personal-info'>
          <span className='personal-name'>Петров В.А.</span>
          <div className='personal-image'> В.А </div>
        </div>
      </div>
      <FilterBlock
        toggleFilter={props.toggleFilter}
        filterStatus={props.filterStatus}
      />
    </header>
  );
}
export default Header;
