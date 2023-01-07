import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import SideLogoBar from './components/SideLogoBar';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <SideLogoBar/>
      <Sidebar/>
      <Main/>
    </div>
  );
}

export default App;
