import './Sidebar.css';
import SidebarLink from './UI/SidibarLink';
import HomeIcon from './assets/home.svg';
import EmployeIcon from './assets/employees.svg';
import AnalyticsIcon from './assets/analytics.svg';
import ClientsIcon from './assets/clients.svg';
import LogoIcon from './assets/logo.svg';

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
        <div className='company-logo navigation__image'>
          <img src={LogoIcon} alt='' />
        </div>
        <span className='company-name'>NAME COMPANY</span>
      </div>
      <nav className='navigation'>
        <ul className='navigation__list'>
          <SidebarLink title='Главная' link='/' icon={HomeIcon} />
          <SidebarLink title='Клиенты' link='/' icon={ClientsIcon} />
          <SidebarLink title='Сотрудники' link='/' icon={EmployeIcon} />
          <SidebarLink title='Аналитика' link='/' icon={AnalyticsIcon} />
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
