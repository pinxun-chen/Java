// components/Navbar.jsx
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';

export default function Navbar() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{ padding: '10px', background: '#eee', marginBottom: '20px' }}>
      <Link to="/products" style={{ marginRight: '10px' }}>商品頁</Link>
      <Link to="/cart" style={{ marginRight: '10px' }}>
        購物車 ({cart.length})
      </Link>
      {isLoggedIn ? (
        <button onClick={handleLogout}>登出</button>
      ) : (
        <Link to="/login">登入</Link>
      )}
    </nav>
  );
}