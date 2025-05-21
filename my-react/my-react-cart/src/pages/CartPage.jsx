// pages/CartPage.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h2>購物車內容</h2>
      {cart.length === 0 ? (
        <p>購物車是空的</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(index)}>移除</button>
              </li>
            ))}
          </ul>
          <p>總金額：${total}</p>
          <button onClick={() => navigate('/checkout')}>前往結帳</button>
        </>
      )}
    </div>
  );
}
