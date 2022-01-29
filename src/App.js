import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Sidebar from './sidebar/Sidebar';

function App() {
  return (
    <div className='App'>
      <div>
        <Sidebar />
      </div>
      <div>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
