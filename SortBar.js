import React from 'react';

const SortBar = ({ filters, onFilterChange, sortType, onSortTypeChange }) => {
  const handleSortTypeChange = (e) => {
    onSortTypeChange(e.target.value);
  };

  return (
    <div className="sort-bar">
      <label>Filter By Class:</label>
      <div>
        {}
      </div>
      <label>
        Sort By:
        <select value={sortType} onChange={handleSortTypeChange}>
          <option value="">None</option>
          <option value="health">Health</option>
          <option value="damage">Damage</option>
          <option value="armor">Armor</option>
        </select>
      </label>
    </div>
  );
};

export default SortBar;
