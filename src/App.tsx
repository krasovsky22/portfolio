import Footer from '@components/Footer';
import NavigationBar from '@components/NavigationBar';
import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import Loading from 'experiment-loading';
import 'experiment-loading/dist/index.css';
import { default as appRoutes } from './Routes';

const App: React.FC = () => {
  const [isToggled, toggleNavBar] = useState<boolean>(false);

  return (
    <div className="App">
      <Router>
        <Suspense
          fallback={
            <section>
              <Loading />
            </section>
          }
        >
          <NavigationBar toogleNavBar={toggleNavBar} isToggled={isToggled} />

          <Switch>
            {appRoutes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Switch>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
