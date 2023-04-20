import React from 'react'
import style from './tasksList.module.css'
import DeleteIcon from '../../assets/deleteIcon.svg'
import EditIcon from '../../assets/editIcon.svg'

export default function TasksList({
  tasksFiltered,
  handleDeleteTask,
  handleOpenModal,
}) {
  return (
    <div className={style.cards}>
      {tasksFiltered.map((task) => (
        <div className={style.card} key={task.id}>
          <div className={style.containerImgAndFilters}>
            <div className={style.filtersCard}>
              <p>Prioridad: {task.priority}</p>
              <p>Estado: {task.state}</p>
            </div>
            <div className={style.containerImg}>
              <img
                className={style.img}
                onClick={() => handleOpenModal(task.id)}
                src={EditIcon}
                alt="Editar"
              />
              <img
                className={style.img}
                onClick={() => handleDeleteTask(task.id)}
                src={DeleteIcon}
                alt="Eliminar"
              />
            </div>
          </div>
          <p>
            Título: <span> {task.title}</span>
          </p>
          <p className={style.p}>
            Descripción: <span>{task.description}</span>
          </p>
        </div>
      ))}
    </div>
  )
}
