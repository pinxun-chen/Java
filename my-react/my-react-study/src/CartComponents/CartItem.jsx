function CartItem({product, toggleCompletion, handleProductDelete}) {
    return (
        <>
            <li key={product.id} style={{textDecoration: product.completed ? 'line-through': 'none'}}>
                {product.id}
                {product.text}
                {product.price}
                <input type="checkbox" 
                       onChange={() => toggleCompletion(product.id)} 
                       checked={product.completed} />

                <button onClick={() => handleProductDelete(product.id)}>X</button>
            </li>
        </>
    )
}

export default CartItem