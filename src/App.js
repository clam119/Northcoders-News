import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from './components/context/UserContext';
import { useState } from 'react';

import './App.css';

export default function App() {
  const [username, setUsername] = useState('Not Logged In');
  return (
    <UserContext.Provider value={{ username, setUsername}}>
      <div className="App">
        <BrowserRouter>
        {/* Header, that is persistent not in Routes,  */}
          
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}


