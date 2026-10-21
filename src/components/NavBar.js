import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ marginBottom: '20px', padding: '10px', background: '#eee' }}>
      <NavLink to="/" end>Trang chủ</NavLink>
      <NavLink to="/tasks">Danh sách</NavLink>
      <NavLink to="/tasks/new">Thêm mới</NavLink>
    </nav>
  );
};

export default NavBar;