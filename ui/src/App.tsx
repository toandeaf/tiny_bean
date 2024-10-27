import tinyBeanLogo from './assets/coffee-bean.png';
import './App.css';
import Button from './Button.tsx';

function App() {
  return (
    <div className={'container'}>
      <div>
        <div>
          <a target="_blank">
            <img
              src={tinyBeanLogo}
              className="logo react"
              alt="tiny bean logo"
            />
          </a>
        </div>
        <h1>tinyBean</h1>

        <p className="subtitle">Lightweight coffee processing software.</p>
        <Button text={'Place Orders'} primary />
        <Button text={'View Orders'} />
      </div>
    </div>
  );
}

export default App;
