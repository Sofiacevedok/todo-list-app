import React from 'react'
import styles from './inputSelect.module.css'

const InputSelect = ({
  options,
  name,
  label,
  onChange,
  value,
  className,
  required = false,
}) => {
  return (
    <select
      className={`${styles.select} ${className}`}
      name={name}
      onChange={onChange}
      value={value}
      required={required}
    >
      {label ? <option value="">{label}</option> : null}
      {options.map((option) => (
        <option key={option.key}>{option.value}</option>
      ))}
    </select>
  )
}

export default InputSelect
