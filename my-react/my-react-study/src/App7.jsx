// 物件陣列 map, filter 應用
function App() {
    // 物件陣列
    const items = [
        {id:1, name:'Apple', price:20},
        {id:2, name:'Banana', price:30},
        {id:3, name:'Orange', price:40},
    ]

    // 陣列過濾
    /*
    const filterItems = items.filter((item) => {
        return item.price > 25;
    })
    */
    const filterItems = items.filter((items) => items.price > 25)

    // 陣列 map
    const items2 = filterItems.map((items, index) => (
                <div key={items.id}>
                    index={index}, id={items.id}, name={items.name}, price={items.price}
                </div>
    ))
    
    return (
        <>
            {items2}
            <hr />
            {
                filterItems.map((items, index) => (
                    <div key={items.id}>
                        index={index}, id={items.id}, name={items.name}, price={items.price}
                    </div>
                ))
            }
        </>
    )
}

export default App;