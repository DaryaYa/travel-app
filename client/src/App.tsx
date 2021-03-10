import React from 'react';
import Header from './components/Header';
import { Widget } from './components/Widget';

const App = () => {
  return (
    <>
      <Header />
      <Widget lat={15} lng={50} timeZone={"Europe/Moscow"} language={"en-GB"} />
    </>
  );
}

export default App;
