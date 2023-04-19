import React from 'react';
import styles from '../formCreate/styleForm.module.css';

export default function SelectPriority({ setSelectedState }) {
  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setSelectedState(selectedState);
  };

  const options2 = [
    { value: 'nueva', label: 'Nueva' },
    { value: 'en proceso', label: 'En proceso' },
    { value: 'finalizada', label: 'Finalizada' },
  ];

  return (
    <div className={styles.selectContainer}>
      <select
        className={styles.select}
        name="state"
        onChange={handleStateChange}
      >
        <option value="">Estado</option>
        {options2.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
