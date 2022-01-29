import './SidebarLink.css';

function SidebarLink(props) {
  return (
    <li className='navigation__item'>
      <a className='navigation__link' href={props.link}>
        <img className='navigation__image' src={props.icon} alt={props.title} />
        {props.title}
      </a>
    </li>
  );
}

export default SidebarLink;
