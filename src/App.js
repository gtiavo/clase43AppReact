import logo from './logo.svg';
import SideBar from './components/SideBar';
import ContentWrapper from './components/ContentWrapper';
import Cabecera from './components/Cabecera';
import './css/app.css'
import './App.css';


function App() {
  return (
    <div>
      < Cabecera />
    <div id="wrapper">  
    < SideBar />
    < ContentWrapper />
    </div>
    </div>
  );
}

export default App;
