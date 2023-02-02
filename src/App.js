import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import BookEvent from '../components/BookEvent';
import ConfirmEvent from '../components/ConfirmEvent';
import './main.scss';
function App() {
  const [search, setSearch] = useState('');
  var data = useSelector((state) => state.event);
  useEffect(() => {}, [search]);
  return (
    <div>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event/:id" element={<BookEvent />} />
            <Route path="confirm" element={<ConfirmEvent />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
