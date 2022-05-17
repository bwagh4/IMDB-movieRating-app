import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home/Home';
import Header from '../src/components/Header/Header';
import MovieDetail from '../src/components/MovieDetails/MovieDetails';
import PageNotFound from '../src/components/PageNotFound/PageNotFound';
// import WatchList from '../src/components/WatchList/WatchList'
import Footer from '../src/components/Footer/Footer'
import './App.css'
import Login from './components/Login/Login';
import Register from './components/Login/Register';

function App() {
  return (
    <div className="App" >
         <Router>
         <Header/>
          
        <Routes>
            <Route path="/" exact element={<Home/>}/>           
            <Route path="/login" exact element={<Login/>}/>           
            <Route path="/register" exact element={<Register/>}/>           
            <Route path="/movie/:imdbID" element={<MovieDetail />}/>         
            <Route element={<PageNotFound />}/>   
        </Routes>
           
        <Footer/>
    </Router>
    </div>
  );
}

export default App;
