import React, { FC } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import CryptoPage from './pages/CryptoPage';
import ResumePage from './pages/ResumePage';
import './styles/App.css';

const App: FC = () => {
  return (
    <Router basename='/bradduderstadt'>
      <div className='App'>
        <Header />
      </div>
      <Routes>
        <Route path='/about' element={<AboutPage />} />
        <Route path='/crypto' element={<CryptoPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/resume' element={<ResumePage />} />
        <Route path='/todo' element={<TodoPage />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
