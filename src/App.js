import {ReactComponent as LinkedIn} from './assets/linkedin.svg';
import {ReactComponent as Email} from './assets/email.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='middle-content'>
        <div className='logo-forge' id='forgeLogo'>Energy Forge</div>
        <span className='typewritter-text'>More information coming soon...   </span>
      </div>
      <div className='footer'>
        <a href="https://www.linkedin.com/company/energy-forge/about/"><LinkedIn className='logo-bottom' /></a>
        <a href="mailto: garrett.hester@gmail.com"><Email className='logo-bottom' /></a>
      </div>
    </div>
  );
}

export default App;
