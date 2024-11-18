import React from 'react';

import styles from './App.module.scss';


import Header from '../Header/Header';
import Main from '../Main/Main';


function App() {


  return (
    <div className={styles.app}>
        <Header/>
        <Main />

    </div>
  );
}

export default App;
