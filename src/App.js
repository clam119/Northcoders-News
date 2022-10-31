import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from './components/context/UserContext';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import * as API from './utils/api';
import './App.css';
import Home from './components/Home';

export default function App() {
  const [username, setUsername] = useState('Not Logged In');
  const [usersRealName, setUsersRealName]= useState('Not Logged In');
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    API.getUsers()
    .then((fetchedUsers) => {
      setUsersList(fetchedUsers);
    });
  }, [])

  return (
    <UserContext.Provider value={{ username, setUsername, usersList, setUsersList, usersRealName, setUsersRealName }}>
      <div className="App">
        <BrowserRouter>
          <Header />
            <Routes>
              <Route path= "/"     element={<Home/>}></Route>
              {/* <Route path="/users" element={<Users/>}></Route> */}
            </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}


