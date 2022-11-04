import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserContext } from './components/context/UserContext';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Topics from './components/Topics';
import SingleArticle from './components/SingleArticle';
import ArticlesByTopic from './components/ArticlesByTopic';
import * as API from './utils/api';
import './App.css';
import Home from './components/Home';

export default function App() {
  const [username, setUsername] = useState('grumpy19');
  const [usersRealName, setUsersRealName]= useState('Tom Tickle');
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
              <Route path= "/" element={<Home/>}></Route>
              <Route path= "/articles/:article_id" element={<SingleArticle />}></Route>
              <Route path= "/topics" element={<Topics/>}> </Route>
              <Route path= "/topics/:slug" element={<ArticlesByTopic/>}> </Route>
              <Route path="*" element={<Navigate to="/"  />} /> 
              {/* <Route path="/users" element={<Users/>}></Route> */}
            </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}


