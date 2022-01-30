import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Sidebar from './sidebar/Sidebar';
import { useState } from 'react';

function App() {
  const [sideBarStatus, setSideBarStatus] = useState(false);
  const [filterStatus, setFilterStatus] = useState(false);
  const [filterName, setFilterName] = useState('');
  const [filterNumber, setFilterNumber] = useState('');

  const handleMouseEnter = (e) => {
    setSideBarStatus(true);
  };

  const handleMouseLeave = (e) => {
    setSideBarStatus(false);
  };

  const toggleFilter = () => {
    setFilterStatus(!filterStatus);
  };

  const handleOnChangeName = (e) => {
    setFilterName(e.target.value);
  };

  const handleOnChangeNumber = (e) => {
    setFilterNumber(e.target.value);
  };

  return (
    <div className='App'>
      <div>
        <Sidebar
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          sideBarStatus={sideBarStatus}
        />
      </div>
      <div>
        <Header
          sideBarStatus={sideBarStatus}
          toggleFilter={toggleFilter}
          filterStatus={filterStatus}
          onChangeName={handleOnChangeName}
          onChangeNumber={handleOnChangeNumber}
        />
        <Main
          sideBarStatus={sideBarStatus}
          filterStatus={filterStatus}
          filterName={filterName}
          filterNumber={filterNumber}
        />
      </div>
    </div>
  );
}

export default App;
