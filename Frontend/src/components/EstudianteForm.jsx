import React from "react";
import styles from "../styles/ListaEstudiantes.module.css";

const EstudianteForm = ({
    formData,
    editando,
    handleInputChange,
    handleSubmit,
    handleCancelar,
}) => {
    let titulo;
    if (editando) {
        titulo = "Editar Estudiante";
    } else {
        titulo = "Formulario";
    }

    let textoBoton;
    if (editando) {
        textoBoton = "Actualizar";
    } else {
        textoBoton = "Registrar";
    }

    return (
        <div className={styles["lista-estudiantes__form"]}>
            <h2 className={styles["lista-estudiantes__title"]}>
                {titulo}
            </h2>

            <div className={styles["lista-estudiantes__field"]}>
                <label className={styles["lista-estudiantes__label"]}>Documento:</label>
                <input
                    type="text"
                    name="documento"
                    value={formData.documento}
                    onChange={handleInputChange}
                    className={styles["lista-estudiantes__input"]}
                    required
                />
            </div>

            <div className={styles["lista-estudiantes__field"]}>
                <label className={styles["lista-estudiantes__label"]}>Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className={styles["lista-estudiantes__input"]}
                    required
                />
            </div>

            <div className={styles["lista-estudiantes__field"]}>
                <label className={styles["lista-estudiantes__label"]}>Apellido:</label>
                <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleInputChange}
                    className={styles["lista-estudiantes__input"]}
                    required
                />
            </div>

            <div className={styles["lista-estudiantes__field"]}>
                <label className={styles["lista-estudiantes__label"]}>Teléfono:</label>
                <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className={styles["lista-estudiantes__input"]}
                    inputMode="numeric"
                    pattern="[0-9]{1,10}"
                    maxLength={10}
                    required
                />
            </div>

            <div className={styles["lista-estudiantes__field"]}>
                <label className={styles["lista-estudiantes__label"]}>Correo:</label>
                <input
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleInputChange}
                    className={styles["lista-estudiantes__input"]}
                    required
                />
            </div>

            <div className={styles["lista-estudiantes__buttons"]}>
                <button
                    type="submit"
                    className={`${styles["lista-estudiantes__button"]} ${styles["lista-estudiantes__button--register"]}`}
                >
                    {textoBoton}
                </button>
                <button
                    type="button"
                    onClick={handleCancelar}
                    className={`${styles["lista-estudiantes__button"]} ${styles["lista-estudiantes__button--cancel"]}`}
                >
                    Cancelar
                </button>
            </div>
        </div>
    );
};


export default EstudianteForm;
