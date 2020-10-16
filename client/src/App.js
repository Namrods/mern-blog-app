import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layouts/Header';
import Navbar from './components/layouts/Navbar';
import Articles from './components/Articles';

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/articles/')
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Route to="/" render={() => <Articles posts={posts} />} />
    </div>
  );
}

export default App;
