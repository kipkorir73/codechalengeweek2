import React from 'react';

const SortBar = ({ filters, onFilterChange }) => {
  return (
    <div className="sort-bar">
      <label>Filter By Class:</label>
      <div>
        <label>
          <input
            type="checkbox"
            checked={filters.includes('Support')}
            onChange={() => onFilterChange('Support')}
          />
          Support
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.includes('Medic')}
            onChange={() => onFilterChange('Medic')}
          />
          Medic
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.includes('Assault')}
            onChange={() => onFilterChange('Assault')}
          />
          Assault
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.includes('Defender')}
            onChange={() => onFilterChange('Defender')}
          />
          Defender
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.includes('Captain')}
            onChange={() => onFilterChange('Captain')}
          />
          Captain
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.includes('Witch')}
            onChange={() => onFilterChange('Witch')}
          />
          Witch
        </label>
      </div>
    </div>
  );
};

export default SortBar;
