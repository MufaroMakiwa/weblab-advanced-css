import './App.css';
import { useState, useEffect } from 'react';
import Corgi from "./assets/corgi.jpg";

const App = () => {
  const [displaySecret, setDisplaySecret] = useState(false);

  return (
    <div>
      <nav>
        <h1>CatbookClub</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Team</li>
          <li>Gallery</li>
        </ul>
      </nav>

      <main>
        <img src={Corgi} alt="corgi"/>

        <button>Reveal A Secret</button>
        <div>
          <p>My name is Corgi</p>
          <button>Close</button>
        </div>

      </main>
    </div>
  );
}

export default App;
