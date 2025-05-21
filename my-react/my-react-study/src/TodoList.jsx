// TodoList 練習
import './App.css'
import { useState } from 'react'

function App() {
    const [inputMessage, setInputMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleInputChange = (e) => {
        // e.target.value 是 input 欄位的內容
        console.log(e.target.value)
        setInputMessage(e.target.value);
    }

    const handleKeyDown = (e) => {
        // 若使用者輸入的是 enter 則自動呼叫 handleAddMessage()
        if(e.key === 'Enter') {
            handleAddMessage();
        }
    }

    const handleAddMessage = () => {
        //setMessages(messages.concat(inputMessage));
        setMessages([...messages, inputMessage]);
    }

    return(
        <>
            <h1>My TodoList</h1>
            <div>
                <input type='text' value={inputMessage} onChange={handleInputChange} onKeyDown={handleKeyDown} />
                <button onClick={handleAddMessage}>加入</button>
            </div>
            <ol>
                <li style={{textDecoration: 'line-through'}}><input type='checkbox' checked />吃早餐</li>
                <li><input type='checkbox' />做體操</li>
                <li><input type='checkbox' />寫程式</li>
                {
                    messages.map((message, index) => (
                        <li key={index}><input type='checkbox' />{message}</li>
                    ))
                }
            </ol>
        </>
    )
}

export default App