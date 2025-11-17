import './App.css';
import Clock from './Clock';
import AlertIcon from './AlertIcon';
import Data from './Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

/* import all the icons in Free Solid */
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function App() {
  const batteryCharge = 45;
  let batteryChargeString = `${batteryCharge}%`;

  return (
    <div className="App">
      <header className="App-header">
        <div className="Toolbar">
          <Clock />
          <AlertIcon />
        </div>
        <div className="App-body">
          <div className="Battery-charge">
            <FontAwesomeIcon icon="fa-solid fa-battery-full" />
            <span className="Value">{batteryChargeString}</span>
          </div>
          <Data />
        </div>
      </header>
    </div>
  );
}

export default App;
