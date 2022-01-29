import './Sidebar.css';

function Sidebar(props) {
  const style = {
    width: props.sideBarStatus ? '200px' : '60px',
  };
  return (
    <aside
      style={style}
      className='aside'
      onMouseEnter={() => props.handleMouseEnter(true)}
      onMouseLeave={() => props.handleMouseLeave(false)}
    >
      <div className='company-block'>
        <div className='company-logo navigation__image'>LOGO</div>
        <span className='company-name'>NAME COMPANY</span>
      </div>
      <nav className='navigation'>
        <ul className='navigation__list'>
          <li className='navigation__item'>
            <a className='navigation__link' href='/'>
              {/* <img src="" alt="" /> */}
              <div className='navigation__image'></div>
              Главная
            </a>
          </li>
          <li className='navigation__item'>
            <a className='navigation__link' href='/'>
              {/* <img src="" alt="" /> */}
              <div className='navigation__image'></div>
              Клиенты
            </a>
          </li>
          <li className='navigation__item'>
            <a className='navigation__link' href='/'>
              {/* <img src="" alt="" /> */}
              <div className='navigation__image'></div>
              Сотрудники
            </a>
          </li>
          <li className='navigation__item'>
            <a className='navigation__link' href='/'>
              {/* <img src="" alt="" /> */}
              <div className='navigation__image'></div>
              Аналитика
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
