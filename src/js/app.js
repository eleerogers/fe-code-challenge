import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import CategoryPage from './components/CategoryPage';
import Cart from './components/Cart';
import '../style/index.scss';

function App() {

  return (
    <div>
      <Header />
      <Switch>
        <Route
          path="/cart"
        >
          <Cart />
        </Route>
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
