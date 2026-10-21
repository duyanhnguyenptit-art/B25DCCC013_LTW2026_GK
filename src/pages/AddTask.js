import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRIORITIES } from '../data';

const AddTask = ({ tasks, onAddTask }) => {
  const [title, setTitle] = useState('');
  const [assignee, setAssignee] = useState('');
  const [priority, setPriority] = useState('Trung bình');
  const [hours, setHours] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !assignee.trim() || !hours) {
      setError('Vui lòng nhập đầy đủ thông tin');
      return;
    }

    const numHours = Number(hours);
    if (!Number.isInteger(numHours) || numHours < 1 || numHours > 40) {
      setError('Số giờ phải từ 1 đến 40');
      return;
    }

    setError('');

    const maxId = tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) : 0;
    const newTask = {
      id: maxId + 1,
      title: title.trim(),
      assignee: assignee.trim(),
      priority,
      hours: numHours,
      done: false,
    };

    onAddTask(newTask);
    navigate('/tasks', { replace: true });
  };

  return (
    <div>
      <h2>Thêm mới công việc</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="title">Tên công việc: </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="assignee">Người làm: </label>
          <input
            id="assignee"
            type="text"
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="priority">Mức ưu tiên: </label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            {PRIORITIES.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="hours">Số giờ ước tính: </label>
          <input
            id="hours"
            type="number"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />
        </div>
        <button type="submit">Thêm</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default AddTask;