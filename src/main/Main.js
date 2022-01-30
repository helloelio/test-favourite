import './Main.css';
import { useState, useEffect } from 'react';
import Personal from './personal/Personal';

function Main(props) {
  const [size, setSize] = useState(document.documentElement.clientWidth);
  const [personal, setPersonal] = useState([
    { id: 1, name: 'Виктор', number: '89991002000' },
    { id: 2, name: 'Константин', number: '89993002000' },
    { id: 3, name: 'Алексей', number: '89994002000' },
    { id: 4, name: 'Александр', number: '89995002000' },
    { id: 5, name: 'Валерий', number: '89996002000' },
    { id: 6, name: 'Максим', number: '89997002000' },
    { id: 7, name: 'Никита', number: '89998002000' },
  ]);
  const [filteredPersonal, setFilteredPersonal] = useState([]);

  window.addEventListener('resize', () => {
    setSize(document.documentElement.clientWidth);
  });

  const renderPesonal = () => {
    if (props.filterName === '' && props.filterNumber === '') {
      setPersonal([
        { id: 1, name: 'Виктор', number: '89991002000' },
        { id: 2, name: 'Константин', number: '89993002000' },
        { id: 3, name: 'Алексей', number: '89994002000' },
        { id: 4, name: 'Александр', number: '89995002000' },
        { id: 5, name: 'Валерий', number: '89996002000' },
        { id: 6, name: 'Максим', number: '89997002000' },
        { id: 7, name: 'Никита', number: '89998002000' },
      ]);
    } else {
      setFilteredPersonal(
        personal.filter((persona) => {
          return (
            persona.number.includes(props.filterNumber) &&
            persona.name.includes(props.filterName)
          );
        })
      );
    }
  };

  useEffect(() => {
    renderPesonal();
  }, [props.filterName, props.filterNumber]);

  const style = {
    left: props.sideBarStatus ? '210px' : '70px',
    width: props.sideBarStatus ? 'calc(100% - 210px)' : 'calc(100% - 70px )',
    top:
      props.filterStatus && size > 1050
        ? '220px'
        : size < 1050 && props.filterStatus
        ? '280px'
        : '115px',
  };

  return (
    <main style={style}>
      <h1>Main title</h1>
      <table className='table'>
        <thead className='table-head'>
          <tr>
            <th>Имя клиента</th>
            <th>Телефон</th>
          </tr>
        </thead>
        <tbody className='table-body'>
          {(props.filterName === '' &&
            props.filterNumber === '' &&
            personal.map((persona) => {
              return <Personal persona={persona} key={persona.id} />;
            })) ||
            filteredPersonal.map((persona) => {
              return <Personal persona={persona} key={persona.id} />;
            })}
        </tbody>
      </table>
    </main>
  );
}

export default Main;
