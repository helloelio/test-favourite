import './Header.css';
import FilterBlock from './filter/Filter';

function Header() {
  return (
    <header className='header'>
      <div className='top-block'>
        <div className='search'>
          <input type='text' className='search-input' placeholder='Поиск...' />
        </div>
        <div className='personal-info'>
          <span className='personal-name'>Петров В.А.</span>
          <div className='personal-image'> В.А </div>
        </div>
      </div>
      <FilterBlock />
    </header>
  );
}
export default Header;
