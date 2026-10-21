import React from 'react';

const Home = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.done).length;
  const remainingHours = tasks.reduce((acc, t) => (t.done ? acc : acc + Number(t.hours)), 0);

  return (
    <div>
      <h2>Công việc nhóm</h2>
      <p>Tổng số công việc: {totalTasks}</p>
      <p>Số công việc đã xong: {completedTasks}</p>
      <p>Tổng số giờ còn lại: {remainingHours}</p>
    </div>
  );
};

export default Home;