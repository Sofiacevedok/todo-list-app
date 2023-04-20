import React, { useState, useEffect } from 'react'
import InputSelect from '../common/inputSelect/InputSelect'
import styles from './formCreate.module.css'

export const priorityOptions = [
  { key: 'high', value: 'Alta' },
  { key: 'medium', value: 'Media' },
  { key: 'low', value: 'Baja' },
]

export const statusOptions = [
  { key: 'new', value: 'Nueva' },
  { key: 'process', value: 'En proceso' },
  { key: 'done', value: 'Finalizada' },
]

const FormCreate = ({ tasks, setTasks, taskId, handleClose }) => {
  const [input, setInput] = useState({
    title: '',
    priority: '',
    state: 'Nueva',
    description: '',
  })

  const handleInputChange = (e) => {
    setInput((oldState) => ({ ...oldState, [e.target.name]: e.target.value }))
  }

  const handleEditTask = (e) => {
    const confirmacion = window.confirm('¿Seguro quieres realizar los cambios?')

    if (confirmacion) {
      e.preventDefault()

      const editTask = {
        title: input.title,
        priority: input.priority,
        state: input.state,
        description: input.description,
        id: taskId,
      }

      const newEditTask = tasks.map((task) => {
        if (task.id === taskId) {
          return editTask
        } else {
          return task
        }
      })
      setTasks(newEditTask)
      handleClose()
    } else {
      handleClose()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const nuevaTarea = {
      title: input.title,
      priority: input.priority,
      state: input.state,
      description: input.description,
      id: tasks.length + 1,
    }

    setTasks([...tasks, nuevaTarea])
    setInput({
      title: '',
      priority: '',
      state: 'Nueva',
      description: '',
    })
  }

  useEffect(() => {
    if (tasks.length && taskId) {
      const indexElement = tasks.findIndex(function (task) {
        return task.id === taskId
      })
      setInput(tasks[indexElement])
    }
  }, [taskId])

  return (
    <div className={styles.containerAppForm}>
      <form onSubmit={handleSubmit} style={{ display: 'contents' }}>
        <div className={styles.containerFilterForm}>
          <input
            className={styles.inputText}
            type="text"
            name="title"
            value={input.title}
            placeholder="Titulo..."
            onChange={handleInputChange}
            required={true}
          />

          <InputSelect
            options={priorityOptions}
            name="priority"
            label={'Prioridad'}
            onChange={handleInputChange}
            value={input.priority}
            className={styles.selectStyles}
            required
          />

          <InputSelect
            options={statusOptions}
            name="state"
            onChange={handleInputChange}
            value={input.state}
            className={styles.selectStyles}
          />
        </div>

        <textarea
          className={styles.description}
          name="description"
          value={input.description}
          rows="8"
          cols="75"
          placeholder="Descripción..."
          onChange={handleInputChange}
          required={true}
        />

        {taskId ? (
          <div className={styles.buttonsModal}>
            <button className={styles.button} onClick={() => handleClose()}>
              Cancelar
            </button>
            <button
              className={styles.button}
              onClick={(e) => handleEditTask(e)}
            >
              Guardar cambios
            </button>
          </div>
        ) : (
          <button className={styles.button} type="submit">
            Crear tarea
          </button>
        )}
      </form>
    </div>
  )
}

export default FormCreate
