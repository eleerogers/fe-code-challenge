import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CategoryPage from './components/CategoryPage';
import '../style/index.scss';

function App() {

  return (
    <div>
      <Switch>
        <Route
          path="/:category"
        >
          <CategoryPage />
        </Route>
        <Route>
          <p>404</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
