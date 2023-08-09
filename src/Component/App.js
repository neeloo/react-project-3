import React, { useState } from 'react'
import './App.css';
import Header from './Header.js';
import ContectList from './ContectList.js';
import AddContect from './AddContent.js';

function App() {

  return (
    <div className='ui container'>
      <Header />
      <AddContect />
      <ContectList contact={contact} />
    </div>
  )
}

export default App