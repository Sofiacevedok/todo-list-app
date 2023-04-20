import React from 'react'
import InputSelect from '../common/inputSelect/InputSelect'
import { priorityOptions, statusOptions } from '../formCreate/FormCreate'
import styles from './filters.module.css'

const Filters = ({ updateFilters, filters }) => {
  const handleInputChange = (e) => {
    updateFilters(e.target.name, e.target.value)
  }

  return (
    <div className={styles.containerFilterTasks}>
      <h3>Filtrar tareas por:</h3>
      <div className={styles.containerSelectsFilter}>
        <InputSelect
          options={priorityOptions}
          name="priority"
          label={'Prioridad'}
          onChange={handleInputChange}
          value={filters.priority}
          className={styles.select}
        />

        <InputSelect
          options={statusOptions}
          name="state"
          label={'Estado'}
          onChange={handleInputChange}
          value={filters.state}
          className={styles.select}
        />
      </div>
    </div>
  )
}

export default Filters
