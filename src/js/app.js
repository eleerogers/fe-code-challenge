import React from 'react';
import '../style/index.scss';

function App() {
  function getWelcomeText() {
    return 'Show Me a Category Page Please...';
  }

  return (
    <div>
      <h1>{getWelcomeText()}</h1>
    </div>
  );
}

export default App;
