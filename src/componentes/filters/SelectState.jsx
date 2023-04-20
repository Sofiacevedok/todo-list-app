import React from 'react';
import { statusOptions } from '../formCreate/FormCreate';
import styles from '../formCreate/styleForm.module.css';

export default function SelectPriority({ setSelectedState }) {
  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setSelectedState(selectedState);
  };

  return (
    <div className={styles.selectContainer}>
      <select
        className={styles.select}
        name="state"
        onChange={handleStateChange}
      >
        <option value="">Estado</option>
        {statusOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
