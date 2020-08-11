import NavigationBar from '@components/NavigationBar';
import classNames from 'classnames';
import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import { default as appRoutes } from './Routes';

const App: React.FC = () => {
  const [isToggled, toggleNavBar] = useState<boolean>(false);

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <NavigationBar toogleNavBar={toggleNavBar} isToggled={isToggled} />
          <section
            className={classNames({
              active: isToggled,
            })}
          >
            <Switch>
              {appRoutes.map((route, index) => (
                <Route key={index} {...route}></Route>
              ))}
            </Switch>
          </section>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
