import React, { useState } from 'react';
import { priorityOptions } from '../formCreate/FormCreate';
import styles from '../formCreate/styleForm.module.css';

export default function SelectPriority({ setSelectedPriority }) {
  const handlePriorityChange = (e) => {
    const selectedPriority = e.target.value;
    setSelectedPriority(selectedPriority);
  };

  return (
    <div className={styles.selectContainer}>
      <select
        className={styles.select}
        name="priority"
        onChange={handlePriorityChange}
      >
        <option value="">Prioridad</option>
        {priorityOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
