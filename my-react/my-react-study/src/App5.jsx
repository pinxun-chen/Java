// 事件處理

function App() {

    const handleClick2 = function() {
        alert('ok2');
    }

    const handleClick3 = (e) => {
        alert('ok3' + e);
        console.log(e);
    }

    return (
        <>
            <button onClick={function(){alert('ok1')}}>我是按鈕 1</button>
            <button onClick={handleClick2}>我是按鈕 2</button>
            <button onClick={handleClick3}>我是按鈕 3</button>
        </>
    )
}

export default App;