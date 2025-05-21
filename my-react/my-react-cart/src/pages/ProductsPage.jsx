// pages/ProductsPage.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const mockProducts = [
  { id: 1, name: '蘋果', price: 30 },
  { id: 2, name: '香蕉', price: 20 },
  { id: 3, name: '橘子', price: 25 },
];

export default function ProductsPage() {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ padding: '20px' }}>
      <h2>商品列表</h2>
      <ul>
        {mockProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>加入購物車</button>
          </li>
        ))}
      </ul>
    </div>
  );
}