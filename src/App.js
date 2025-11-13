import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import AlertIcon from './AlertIcon';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Toolbar">
          <Clock />
          <AlertIcon />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
