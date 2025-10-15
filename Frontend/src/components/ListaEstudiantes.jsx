import { useState } from "react";
import { saveEstudiante } from "../services/api";
import styles from "../styles/ListaEstudiantes.module.css";
import EstudianteForm from "./EstudianteForm";
import EstudianteTable from "./EstudianteTable";

const ListaEstudiantes = () => {
    // Estado para manejar los estudiantes registrados (autoincremental)
    const [estudiantes, setEstudiantes] = useState([]);

    // Estado para el formulario
    const [formData, setFormData] = useState({
        documento: "",
        nombre: "",
        apellido: "",
        telefono: "",
        correo: "",
    });


    // Estado para controlar si estamos editando
    const [editando, setEditando] = useState(false);
    const [estudianteEditandoId, setEstudianteEditandoId] = useState(null);

    // Manejar cambios en los inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const validateAll = () => {
        return true;
    };

    // Registrar nuevo estudiante o actualizar existente
    const handleRegistrar = () => {
        if (editando) {
            // Actualizar estudiante existente
            setEstudiantes((prevEstudiantes) =>
                prevEstudiantes.map((estudiante) => {
                    if (estudiante.id === estudianteEditandoId) {
                        return {
                            ...estudiante,
                            documento: formData.documento,
                            nombre: formData.nombre,
                            apellido: formData.apellido,
                            correo: formData.correo,
                            telefono: formData.telefono,
                        };
                    } else {
                        return estudiante;
                    }
                })
            );
            alert("Estudiante actualizado exitosamente");
            setEditando(false);
            setEstudianteEditandoId(null);
        } else {
            // Crear nuevo estudiante con ID autoincremental
            const nuevoEstudiante = {
                id: Date.now(), // ID único basado en timestamp
                documento: formData.documento,
                nombre: formData.nombre,
                apellido: formData.apellido,
                correo: formData.correo,
                telefono: formData.telefono,
            };

            // Agregar al final de la lista (autoincremental)
            setEstudiantes((prevEstudiantes) => [
                ...prevEstudiantes,
                nuevoEstudiante,
            ]);
            alert("Estudiante registrado exitosamente");
        }
        handleCancelar(); // Limpiar el formulario después de registrar/actualizar
    };

    // Limpiar formulario y cancelar edición
    const handleCancelar = () => {
        setFormData({
            documento: "",
            nombre: "",
            apellido: "",
            telefono: "",
            correo: "",
        });
        setEditando(false);
        setEstudianteEditandoId(null);
    };

    // Función para editar estudiante
    const handleEditar = (estudiante) => {
        setFormData({
            documento: estudiante.documento,
            nombre: estudiante.nombre,
            apellido: estudiante.apellido,
            telefono: estudiante.telefono,
            correo: estudiante.correo,
        });
        setEditando(true);
        setEstudianteEditandoId(estudiante.id);
    };

    // Eliminar estudiante por ID
    const handleEliminar = (id) => {
        setEstudiantes((prevEstudiantes) =>
            prevEstudiantes.filter((estudiante) => estudiante.id !== id)
        );
        alert("Estudiante eliminado correctamente");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log("Datos a enviar:", formData);

        try {
            const data = await saveEstudiante(formData);
            console.log("Datos enviados exitosamente:", data);
            handleRegistrar();
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles["lista-estudiantes"]}>
                {/* Formulario */} 
                <EstudianteForm
                    formData={formData}
                    editando={editando}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    handleCancelar={handleCancelar}
                />

                {/* Lista de Estudiantes */}
                <EstudianteTable
                    estudiantes={estudiantes}
                    handleEditar={handleEditar}
                    handleEliminar={handleEliminar}
                />
            </div>
        </form>
    );
};

export default ListaEstudiantes;
