import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import './App.scss';

const App: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const toggle = useCallback(() => setShowSidebar(!showSidebar), [
    setShowSidebar,
    showSidebar,
  ]);
  return (
    <div className="App">
      <section
        className={classNames({ banner: true, active: showSidebar })}
        id="sec"
      >
        <header>
          <a href="#" className="logo">
            Logo
          </a>
          <div id="toogle" className="cursor-pointer" onClick={toggle} />
        </header>
        <div className="content">
          <h2>
            Hello World, <br /> I'm <span>Vlad Krasovski</span>
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            ea enim nulla eum omnis modi impedit minima aliquam possimus
            assumenda iste, laboriosam fuga quae maxime consequatur tempore
            corporis nobis error.
          </p>
          <a href="#">Know More</a>>
        </div>
        <ul className="sci">
          <li>
            <a href="#">F</a>
          </li>
          <li>
            <a href="#">T</a>
          </li>
          <li>
            <a href="#">L</a>
          </li>
        </ul>
      </section>
      <div id="navigation" className={classNames({ active: showSidebar })}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
