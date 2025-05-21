// pages/CheckoutPage.jsx
import React, { useState } from 'react';

export default function CheckoutPage() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`訂單已送出！\n收件人：${name}\n地址：${address}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>結帳資訊</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>收件人：</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>地址：</label>
          <input value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <button type="submit">送出訂單</button>
      </form>
    </div>
  );
}
