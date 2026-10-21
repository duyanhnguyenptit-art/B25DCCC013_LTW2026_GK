import React, { useState } from 'react';
import FilterBar from '../components/FilterBar';
import TaskTable from '../components/TaskTable';

const TaskList = ({ tasks, onToggleStatus, onDelete }) => {
  const [search, setSearch] = useState('');
  const [priority, setPriority] = useState('');

  const filteredTasks = tasks.filter((t) => {
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase());
    const matchPriority = priority === '' || t.priority === priority;
    return matchSearch && matchPriority;
  });

  return (
    <div>
      <h2>Danh sách công việc</h2>
      <FilterBar
        search={search}
        setSearch={setSearch}
        priority={priority}
        setPriority={setPriority}
      />
      <p>Tìm thấy {filteredTasks.length} công việc</p>
      <TaskTable
        tasks={filteredTasks}
        onToggleStatus={onToggleStatus}
        onDelete={onDelete}
      />
    </div>
  );
};

export default TaskList;