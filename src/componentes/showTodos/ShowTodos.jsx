import React, { useState } from 'react';
import SelectPriority from '../filters/SelectPriority';
import SelectState from '../filters/SelectState';
import FormCreate from '../formCreate/FormCreate';
import Modal from '../modal/Modal';
import style from './showStyle.module.css';
import DeleteIcon from '../../assets/deleteIcon.svg';
import EditIcon from '../../assets/editIcon.svg';

export default function ShowTodos() {
  const [tareas, setTareas] = useState([]);
  const [selectedPriority, setSelectedPriority] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [modalState, setModalState] = useState({ show: false, taskId: null });
  const [showFullText, setShowFullText] = useState(false);

  const handleClose = () => {
    setModalState((oldState) => ({ ...oldState, show: false }));
  };

  const handleOpen = (id) => {
    setModalState({ show: true, taskId: id });
  };

  const updateSelectedPriority = (priority) => {
    setSelectedPriority(priority);
  };

  const updateSelectedState = (state) => {
    setSelectedState(state);
  };

  const handleDeleteTarea = (id) => {
    const confirmacion = window.confirm(
      '¿Seguro quieres realizar los cambios?'
    );

    if (confirmacion) {
      const updatedTareas = tareas.filter((tarea) => tarea.id !== id);
      setTareas(updatedTareas);
    }
  };

  const filteredTareas = tareas.filter((tarea) => {
    if (selectedPriority && tarea.priority !== selectedPriority) {
      return false;
    }
    if (selectedState && tarea.state !== selectedState) {
      return false;
    }
    return true;
  });

  const renderedTareas =
    selectedPriority || selectedState ? filteredTareas : tareas;

  return (
    <div className={style.containerApp}>
      <FormCreate tareas={tareas} setTareas={setTareas} />
      <div className={style.containerFilterTasks}>
        <h3>Filtrar tareas por:</h3>
        <div className={style.containerFilter}>
          <SelectPriority setSelectedPriority={updateSelectedPriority} />
          <SelectState setSelectedState={updateSelectedState} />
        </div>
      </div>

      <div className={style.cards}>
        {renderedTareas.map((tarea) => (
          <div className={style.card} key={tarea.id}>
            <div className={style.containerImgAndFilters}>
              <div className={style.filtersCard}>
                <p>Prioridad: {tarea.priority}</p>
                <p>Estado: {tarea.state}</p>
              </div>
              <div className={style.containerImg}>
                <img
                  className={style.img}
                  onClick={() => handleDeleteTarea(tarea.id)}
                  src={DeleteIcon}
                  alt="Eliminar"
                />
                <img
                  className={style.img}
                  onClick={() => handleOpen(tarea.id)}
                  src={EditIcon}
                  alt="Editar"
                />
              </div>
            </div>
            <p>
              Título: <span> {tarea.title}</span>
            </p>
            <p className={style.p}>
              Descripción: <span>{tarea.description}</span>
            </p>
          </div>
        ))}
      </div>
      <Modal show={modalState.show} handleClose={handleClose}>
        <FormCreate
          tareas={tareas}
          setTareas={setTareas}
          taskId={modalState.taskId}
          handleClose={handleClose}
        />
      </Modal>
    </div>
  );
}
