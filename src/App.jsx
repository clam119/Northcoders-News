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
  const [username, setUsername] = useState(() => {
    const savedUsername = localStorage.getItem("username");
    const initialValue = JSON.parse(savedUsername);
    return initialValue || "Not Logged In";
  })

  const [usersRealName, setUsersRealName] = useState(() => {
    const savedUsersRealname = localStorage.getItem("usersRealName");
    const initialValue = JSON.parse(savedUsersRealname);
    return initialValue || "Not Logged In";
  })

  
  const [usersList, setUsersList] = useState([]);
  const [avatar, setAvatar] = useState(() => {
    const savedAvatar = localStorage.getItem("avatar");
    const initialValue = JSON.parse(savedAvatar);
    return initialValue || "https://i.ibb.co/MfFhp0z/800px-Question-mark-black-svg.png"
  })

  useEffect(() => {
    API.getUsers()
    .then((fetchedUsers) => {
      setUsersList(fetchedUsers);
    });
  }, [])

  return (
    <UserContext.Provider value={{ username, setUsername, usersList, setUsersList, usersRealName, setUsersRealName, avatar, setAvatar}}>
      <div className="App">
        <BrowserRouter>
          <Header />
            <Routes>
              <Route path= "/" element={<Home/>}></Route>
              <Route path= "/articles/:article_id" element={<SingleArticle />}></Route>
              <Route path= "/topics" element={<Topics/>}> </Route>
              <Route path= "/topics/:slug" element={<ArticlesByTopic/>}> </Route>
              <Route path="*" element={<Navigate to="/"  />} /> 
            </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}


