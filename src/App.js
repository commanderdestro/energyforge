import forgeLogo from './images/forgeNoBorder.png';
import {ReactComponent as LinkedIn} from './images/linkedin.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='middle-content'>
        <img className='logo-forge' id='forgeLogo' src={forgeLogo} alt="Energy Forge" />
        <span className='typewritter-text'>More information coming soon...   </span>
      </div>
      <div className='footer'>
        <LinkedIn className='logo-bottom' />
      </div>
    </div>
  );
}

export default App;
