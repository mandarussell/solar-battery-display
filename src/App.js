import './App.css';
import Clock from './Clock';
import AlertIcon from './AlertIcon';
import Data from './Data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Toolbar">
          <Clock />
          <AlertIcon />
        </div>
        <div className="App-body">
          <Data />
        </div>
      </header>
    </div>
  );
}

export default App;
