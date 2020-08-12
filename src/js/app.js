import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import CategoryPage from './components/CategoryPage';
import Cart from './components/Cart';
import '../style/index.scss';

function App() {

  return (
    <div className="app-body">
      <Layout>
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
          <Route />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
