import React, { useState } from 'react'
import Filters from './componentes/filters/Filters'
import FormCreate from './componentes/formCreate/FormCreate'
import styles from './App.module.css'
import Modal from './componentes/modal/Modal'
import TasksList from './componentes/tasksList/TasksList'

function App() {
  const [tasks, setTasks] = useState([])
  const [filters, setFilters] = useState({ state: '', priority: '' })
  const [modalState, setModalState] = useState({ show: false, taskId: null })

  const handleCloseModal = () => {
    setModalState({ show: false, taskId: null })
  }

  const handleOpenModal = (id) => {
    setModalState({ show: true, taskId: id })
  }

  const updateFilters = (keyFilter, valueFilter) => {
    setFilters((oldFilters) => ({ ...oldFilters, [keyFilter]: valueFilter }))
  }

  const handleDeleteTask = (id) => {
    const confirmacion = window.confirm('¿Seguro quieres eliminar esta tarea?')

    if (confirmacion) {
      const updateTasks = tasks.filter((task) => task.id !== id)
      setTasks(updateTasks)
    }
  }
  const tasksFiltered = tasks.filter((task) => {
    if (filters.priority.length && filters.state.length) {
      return task.priority === filters.priority && task.state === filters.state
    }
    if (filters.priority.length) {
      return task.priority === filters.priority
    }
    if (filters.state.length) {
      return task.state === filters.state
    }
    return true
  })

  const noResultsFilters =
    (filters.state.length || filters.priority.length) && !tasksFiltered.length
  return (
    <div className={styles.containerApp}>
      <div className={styles.layout}>
        <FormCreate tasks={tasks} setTasks={setTasks} />
        <Filters filters={filters} updateFilters={updateFilters} />
        {tasks.length && noResultsFilters ? (
          <div>No se encontraron tareas para los filtros seleccionados...</div>
        ) : null}
        {tasks.length ? (
          <TasksList
            tasksFiltered={tasksFiltered}
            handleDeleteTask={handleDeleteTask}
            handleOpenModal={handleOpenModal}
          />
        ) : (
          <div>No existen tareas aún...</div>
        )}
      </div>
      <Modal show={modalState.show} handleClose={handleCloseModal}>
        <FormCreate
          tasks={tasks}
          setTasks={setTasks}
          taskId={modalState.taskId}
          handleClose={handleCloseModal}
        />
      </Modal>
    </div>
  )
}

export default App
