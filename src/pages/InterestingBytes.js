import React from 'react';
import div from './Pages.css';
import MyTabs from '../components/MyTabs'
const InterestingBytes = () => {
  return (
    <div classname={div} style={{textAlign:'center'}}>
      <header>
        <h1>InterestingBytes</h1>
      </header>
      <main>
        <MyTabs />
      </main>
    </div>
  );
}

export default InterestingBytes;