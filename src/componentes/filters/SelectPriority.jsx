import React, { useState } from 'react';
import styles from '../formCreate/styleForm.module.css';

export default function SelectPriority({ setSelectedPriority }) {
  const handlePriorityChange = (e) => {
    const selectedPriority = e.target.value;
    setSelectedPriority(selectedPriority);
  };

  const options = [
    { value: 'alta', label: 'Alta' },
    { value: 'media', label: 'Media' },
    { value: 'baja', label: 'Baja' },
  ];

  return (
    <div className={styles.selectContainer}>
      <select
        className={styles.select}
        name="priority"
        onChange={handlePriorityChange}
      >
        <option value="">Prioridad</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
