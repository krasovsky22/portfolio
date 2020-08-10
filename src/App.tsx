import NavigationBar from '@components/NavigationBar';
import classNames from 'classnames';
import React, { lazy, Suspense, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  RouteProps,
  Switch,
} from 'react-router-dom';
import './App.scss';

const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('@views/Home')),
  },
  {
    path: '/about',
    exact: true,
    component: lazy(() => import('@views/About')),
  },
];

const App: React.FC = () => {
  const [isToggled, toggleNavBar] = useState<boolean>(false);

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <NavigationBar toogleNavBar={toggleNavBar} isToggled={isToggled} />
          <section
            className={classNames({
              content: true,
              active: isToggled,
            })}
          >
            <Switch>
              {routes.map((route, index) => (
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
