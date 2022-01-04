import './App.css';
import { useState } from 'react';
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
        <h1>CatbookClub</h1>
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
            className={`secret-button show ${displaySecret ? 'hidden' : ''}`}
            onClick={() => toggleSecret(true)}>
            Reveal My Secret
          </button>

          <div className={`u-flex secret-container ${!displaySecret ? 'hidden' : ''}`}>
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
