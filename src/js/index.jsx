import React from 'react';
import { render } from 'react-dom';

import '../style/index.scss';

class App extends React.Component {
  getWelcomeText = () => {
    return 'Show Me a Category Page Please...';
  }

  render() {
    const welcomeText = this.getWelcomeText();
    return (
      <div>
        <h1>{welcomeText}</h1>
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('app'),
);
