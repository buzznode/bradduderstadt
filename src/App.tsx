import React, { FC } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import CryptoPage from './pages/CryptoPage';
import './styles/App.css';

const App: FC = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
      </div>
      <Routes>
        <Route path='/bradduderstadt/about' element={<AboutPage />} />
        <Route path='/bradduderstadt/crypto' element={<CryptoPage />} />
        <Route path='/bradduderstadt/profile' element={<ProfilePage />} />
        <Route path='/bradduderstadt/todo' element={<TodoPage />} />
        <Route path='/bradduderstadt' element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
