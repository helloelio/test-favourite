import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Sidebar from './sidebar/Sidebar';
import { useState } from 'react';

function App() {
  const [sideBarStatus, setSideBarStatus] = useState(false);
  const [filterStatus, setFilterStatus] = useState(false);

  const handleMouseEnter = (e) => {
    setSideBarStatus(true);
  };

  const handleMouseLeave = (e) => {
    setSideBarStatus(false);
  };

  const toggleFilter = () => {
    setFilterStatus(!filterStatus);
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
        />
        <Main sideBarStatus={sideBarStatus} filterStatus={filterStatus} />
      </div>
    </div>
  );
}

export default App;
