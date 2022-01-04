import './App.css';
import { useState, useEffect } from 'react';
import Corgi from "./assets/corgi.jpg";

const App = () => {
  const [displaySecret, setDisplaySecret] = useState(false);

  const handleClick = (tab) => {
    alert(`You have clicked the ${tab} tab`);
  }

  const toggleSecret = (value) => {
    setDisplaySecret(value);
  }

  return (
    <div>
      <nav>
        <h2>CatbookClub</h2>
        <ul>
          <li onClick={() => handleClick("Home")}>Home</li>
          <li onClick={() => handleClick("About")}>About</li>
          <li onClick={() => handleClick("Team")}>Team</li>
          <li onClick={() => handleClick("Gallery")}>Gallery</li>
        </ul>
      </nav>

      <main className="u-flex">
        <img src={Corgi} alt="corgi"/>
        <section className="u-flex">
          <button 
            className={`${displaySecret ? 'hidden' : ''} secret-button show`}
            onClick={() => toggleSecret(true)}>
            Reveal A Secret
          </button>

          <div className={`${!displaySecret ? 'hidden' : ''} u-flex secret-container`}>
            <p>My name is Corgi</p>

            <button 
              className="secret-button hide"
              onClick={() => toggleSecret(false)}>
              Close
            </button>

          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
