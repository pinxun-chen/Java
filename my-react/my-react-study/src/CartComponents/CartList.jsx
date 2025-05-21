import CartItem from "./CartItem"

function CartList({products, toggleCompletion, handleProductDelete}){
    return(
        <>
            <ul>
                {
                    products.map((product) => (
                        <CartItem product={product} 
                                  toggleCompletion={toggleCompletion} 
                                  handleProductDelete={handleProductDelete}/>
                    ))
                }
            </ul>
        </>
    )
}

export default CartList