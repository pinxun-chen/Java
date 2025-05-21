function CartInput({product, handleProductChange, handleKeyDown, 
                    productPrice, handleProductPriceChange, handleProductAdd}) {
    return(
        <>
            <div>   
                <input type='text' value={product} onChange={handleProductChange} onKeyDown={handleKeyDown}/>
                <input type='number' value={productPrice} onChange={handleProductPriceChange} onKeyDown={handleKeyDown}/>
                <button onClick={handleProductAdd}>加入</button>
            </div>
        </>
    )
}

export default CartInput