import './App.css'
import { useState } from 'react';
import CartInput from './CartComponents/CartInput';
import CartList from './CartComponents/CartList';
function App() {
    const [products, setProducts] = useState([
        {id:1, text:'蘋果', price:50, completed:false},
        {id:2, text:'香蕉', price:30, completed:false}
    ])
    const [product, setProduct] = useState('')
    const [productPrice, setProductPrice] = useState('')

    const handleProductChange = (e) => {
        setProduct(e.target.value)
    }

    const handleProductPriceChange = (e) => {
        setProductPrice(e.target.value)
    }

    const handleProductAdd = () => {
        const newId = products.length >0 ? Math.max(...products.map((product)=>product.id)) + 1: 1
        const newProduct = {id:newId, text:product, price: Number(productPrice), completed:false}
        setProducts([...products, newProduct])
        setProduct('')
        setProductPrice('')
    }

    const toggleCompletion = (id) => {
        setProducts(
            products.map((product) => product.id === id ? {...product, completed: !product.completed} : product)
        )
    }

    const handleProductDelete = (id) => {
        setProducts(products.filter((p) => p.id !== id));
    }

    const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            handleProductAdd();
        }
    }

    return (
        <>
            <h1>購物車</h1>
            <CartInput product={product} 
                       handleProductChange={handleProductChange} 
                       handleKeyDown={handleKeyDown} 
                       productPrice={productPrice} 
                       handleProductPriceChange={handleProductPriceChange} 
                       handleProductAdd={handleProductAdd} />
            <CartList products={products} 
                      toggleCompletion={toggleCompletion} 
                      handleProductDelete={handleProductDelete} />
            <div>總價:{totalPrice}</div>
        </>
    )
}

export default App