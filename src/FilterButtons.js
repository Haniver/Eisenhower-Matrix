import React from 'react';

function FilterButtons({ filter, onFilterChange }) {
  return (
    <div>
      <h2>Filter</h2>
      <button
        onClick={() => onFilterChange('all')}
        className={filter === 'all' ? 'active' : ''}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange('urgent-important')}
        className={filter === 'urgent-important' ? 'active' : ''}
      >
        Urgent and Important
      </button>
      <button
        onClick={() => onFilterChange('important-not-urgent')}
        className={filter === 'important-not-urgent' ? 'active' : ''}
      >
        Important but not Urgent
      </button>
      <button
        onClick={() => onFilterChange('urgent-not-important')}
        className={filter === 'urgent-not-important' ? 'active' : ''}
      >
        Urgent but not Important
      </button>
      <button
        onClick={() => onFilterChange('not-important-not-urgent')}
        className={filter === 'not-important-not-urgent' ? 'active' : ''}
      >
        Not Important and not Urgent
      </button>
    </div>
  );
}

export default FilterButtons;
