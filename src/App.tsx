import NavigationBar from '@components/NavigationBar';
import classNames from 'classnames';
import React, { useState, useCallback } from 'react';
import Home from '@views/Home';
import './App.scss';

const App: React.FC = () => {
  const [isToggled, toggleNavBar] = useState<boolean>(false);

  return (
    <div className="App">
      <NavigationBar toogleNavBar={toggleNavBar} isToggled={isToggled} />
      <section
        className={classNames({ 'home-content': true, active: isToggled })}
      >
        <Home />
      </section>
    </div>
  );
};

export default App;
