import React from 'react';
import TaskRow from './TaskRow';

const TaskTable = ({ tasks, onToggleStatus, onDelete }) => {
  if (tasks.length === 0) {
    return <p>Không có dữ liệu.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Công việc</th>
          <th>Người làm</th>
          <th>Ưu tiên</th>
          <th>Số giờ</th>
          <th>Trạng thái</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TaskRow
            key={task.id}
            task={task}
            onToggleStatus={onToggleStatus}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;