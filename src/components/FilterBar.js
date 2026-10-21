import React from 'react';
import { PRIORITIES } from '../data';

const FilterBar = ({ search, setSearch, priority, setPriority }) => {
  return (
    <div style={{ marginBottom: '15px' }}>
      <label htmlFor="search">Tìm kiếm: </label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Nhập tên công việc..."
        style={{ marginRight: '20px', padding: '5px' }}
      />

      <label htmlFor="priority">Mức ưu tiên: </label>
      <select
        id="priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={{ padding: '5px' }}
      >
        <option value="">Tất cả</option>
        {PRIORITIES.map((p) => (
          <option key={p} value={p}>{p}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;