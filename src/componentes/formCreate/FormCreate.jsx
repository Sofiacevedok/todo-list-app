import React, { useState } from 'react';
import { useEffect } from 'react';
import styles from './styleForm.module.css';

const FormCreate = ({ tareas, setTareas, taskId, handleClose }) => {
  const [input, setInput] = useState({
    title: '',
    priority: '',
    state: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const newInput = {
      ...input,
      [e.target.name]: e.target.value,
    };

    setInput(newInput);
  };

  const handleEditTask = (e) => {
    const confirmacion = window.confirm(
      '¿Seguro quieres realizar los cambios?'
    );
    console.log(confirmacion);

    if (confirmacion) {
      e.preventDefault();

      const editTask = {
        title: input.title,
        priority: input.priority,
        state: input.state,
        description: input.description,
        id: taskId,
      };

      const newEditTask = tareas.map((task) => {
        if (task.id === taskId) {
          return editTask;
        } else {
          return task;
        }
      });
      setTareas(newEditTask);
      handleClose();
    } else {
      handleClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevaTarea = {
      title: input.title,
      priority: input.priority,
      state: input.state ? input.state : 'nueva',
      description: input.description,
      id: tareas.length + 1,
    };

    setTareas([...tareas, nuevaTarea]);
    setInput({
      title: '',
      priority: '',
      state: '',
      description: '',
    });
  };

  useEffect(() => {
    if (tareas.length && taskId) {
      const indexElement = tareas.findIndex(function (task) {
        return task.id === taskId;
      });
      setInput(tareas[indexElement]);
    }
  }, [taskId]);

  const options = [
    { value: 'alta', label: 'Alta' },
    { value: 'media', label: 'Media' },
    { value: 'baja', label: 'Baja' },
  ];

  const options2 = [
    { value: 'nueva', label: 'Nueva' },
    { value: 'en proceso', label: 'En proceso' },
    { value: 'finalizada', label: 'Finalizada' },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.containerAppForm}>
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

          <div className={styles.selectContainer}>
            <select
              className={styles.select}
              name="priority"
              onChange={handleInputChange}
              required={true}
            >
              <option value={input.priority}>Prioridad</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.selectContainer}>
            <select
              className={styles.select}
              name="state"
              onChange={handleInputChange}
              //required={true}
            >
              <option value={input.state}>Estado</option>
              {options2.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
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
          <button className={styles.button} onClick={(e) => handleEditTask(e)}>
            Editar tarea
          </button>
        ) : (
          <button className={styles.button} type="submit">
            Crear tarea
          </button>
        )}
      </div>
    </form>
  );
};

export default FormCreate;
