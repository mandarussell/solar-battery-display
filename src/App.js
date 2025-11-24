import './App.css';
import Clock from './Clock';
import Data from './Data';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Toolbar">
          <Clock />
        </div>
        <div className="App-body">
          <Data />
          <Weather />
        </div>
      </header>
    </div>
  );
}

export default App;
