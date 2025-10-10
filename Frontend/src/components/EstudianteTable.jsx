import React from "react";
import styles from "../styles/ListaEstudiantes.module.css";

const EstudianteTable = ({ estudiantes, handleEditar, handleEliminar }) => {
  return (
    <div className={styles["lista-estudiantes__list"]}>
      <h2 className={styles["lista-estudiantes__title"]}>Lista de Estudiantes</h2>
      <p className={styles["lista-estudiantes__count"]}>
        Total de estudiantes registrados: {estudiantes.length}
      </p>

      <table className={styles["lista-estudiantes__table"]}>
        <thead>
          <tr className={styles["lista-estudiantes__header-row"]}>
            <th className={styles["lista-estudiantes__header-cell"]}>Documento</th>
            <th className={styles["lista-estudiantes__header-cell"]}>Nombre</th>
            <th className={styles["lista-estudiantes__header-cell"]}>Apellido</th>
            <th className={styles["lista-estudiantes__header-cell"]}>Correo</th>
            <th className={styles["lista-estudiantes__header-cell"]}>Teléfono</th>
            <th className={styles["lista-estudiantes__header-cell"]}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map((estudiante) => (
            <tr key={estudiante.id} className={styles["lista-estudiantes__row"]}>
              <td className={styles["lista-estudiantes__cell"]}>{estudiante.documento}</td>
              <td className={styles["lista-estudiantes__cell"]}>{estudiante.nombre}</td>
              <td className={styles["lista-estudiantes__cell"]}>{estudiante.apellido}</td>
              <td className={styles["lista-estudiantes__cell"]}>{estudiante.correo}</td>
              <td className={styles["lista-estudiantes__cell"]}>{estudiante.telefono}</td>
              <td className={styles["lista-estudiantes__cell"]}>
                <button
                  className={`${styles["lista-estudiantes__action"]} ${styles["lista-estudiantes__action--edit"]}`}
                  onClick={() => handleEditar(estudiante)}
                >
                  Editar
                </button>
                <button
                  className={`${styles["lista-estudiantes__action"]} ${styles["lista-estudiantes__action--delete"]}`}
                  onClick={() => handleEliminar(estudiante.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EstudianteTable;
