import React, { FC } from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import CryptoPage from './pages/CryptoPage';
import './styles/App.css';

const App: FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className='App'>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/bradduderstadt/about'>
          <Route index element={<AboutPage />} />
          <Route path=':nbr' element={<AboutPage />} />
        </Route>
        <Route path='/crypto' element={<CryptoPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/todo' element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
