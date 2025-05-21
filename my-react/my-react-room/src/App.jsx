import './App.css'
import React, { useEffect, useState } from 'react';

const API_BASE = 'http://localhost:8081/rest/room'

function App() {
  const [rooms, setRooms] = useState([]);
  const [form, setForm] = useState({roomId:'', roomName:'', roomSize:''});
  const [editing, setEditing] = useState(false); // 是否是編輯模式

  // 查詢所有房間
  const fetchRooms = async () => {
    try {
      // credentials: 'include': 允許將憑證資料上傳, 例如: session id
      const res = await fetch(API_BASE, {credentials: 'include'});
      const data = await res.json();
      console.log('data:', data);
      setRooms(data.data);
    } catch(err) {
      console.log('取得房間資料失敗:', err.message);
      alert('取得房間資料失敗:' + err.message);
    }

  };

  useEffect(() => {
    // console.log('查詢所有房間');
    fetchRooms();
  }, []);

  const handleChange = (e) => {
    const {name, value } = e.target;
    setForm(prev => ({...prev, [name]: value}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = editing ? 'PUT' : 'POST';
      const url = editing ? `${API_BASE}/${form.roomId}` : API_BASE;
      const res = await fetch(url, {
        method,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });
      const result = await res.json();
      if (res.ok) {
        await fetchRooms(); // 重新查詢
         setForm({roomId:'', roomName:'', roomSize:''}); // 清空表單
        setEditing(false); // 恢復到新增狀態
      } else {
        alert(result.message || '操作失敗');
      }
    } catch (err) {
      console.error('提交錯誤:', err);
    }
  }

  // 編輯功能
  const handleEdit = (room) => {
    setForm(room); // 將 Room 的資料填入到表單
    setEditing(true); // 啟用編輯模式
  };

  // 刪除
  const handleDelete = async (roomId) => {
    if(!window.confirm('確定要刪除嗎?')) return;
    try {
      const method = 'DELETE';
      const url = `${API_BASE}/${roomId}`;
      const res = await fetch(url, {
        method,
        credentials: 'include'
      });

      if(!res.ok) throw new Error(res);

      const resData = await res.json();
      if(resData.status == 200) {
        fetchRooms();
      } else {
        alert('刪除失敗:' + resData.message);
      }

    } catch(err) {
      alert('刪除失敗:' + err.message);
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>房間管理系統</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
        <fieldset>
          <legend>新增房間</legend>
          <div>
            <label>房號：</label>
            <input
              type="number"
              name="roomId"
              value={form.roomId}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>房名：</label>
            <input
              type="text"
              name="roomName"
              value={form.roomName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>人數：</label>
            <input
              type="number"
              name="roomSize"
              value={form.roomSize}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">{editing ? '更新' : '新增'}房間</button>
          {
            editing && (
              <button type="button" onClick={() => {
                setEditing(false); // 取消編輯模式
                setForm({ roomId: '', roomName:'', roomSize:'' }); // 表格清空
              }}>取消編輯</button>
            )
          }
          
        </fieldset>
      </form>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>房號</th>
            <th>房名</th>
            <th>人數</th>
            <th>編輯</th>
            <th>刪除</th>
          </tr>
        </thead>
        <tbody>
          {
            rooms.map(room => {
              return (
                <tr key={room.roomId}>
                  <td>{room.roomId}</td>
                  <td>{room.roomName}</td>
                  <td>{room.roomSize}</td>
                  <td>
                    <button onClick={() => handleEdit(room)}>編輯</button>
                  </td>
                  <td>
                    <button onClick={() => {handleDelete(room.roomId)}}>刪除</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;