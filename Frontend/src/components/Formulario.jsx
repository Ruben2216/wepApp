import { useState } from "react";
// import PropTypes from 'prop-types'

const FormularioAlumno = ({agregarAlumno}) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [curso, setCurso] = useState('');
    const [sexo, setSexo] = useState('');
    const [hablaIngles, setHablaIngles] = useState(false);

    let textoIngles;
    if (hablaIngles) {
        textoIngles = "Sí";
    } else {
        textoIngles = "No";
    }

    const handleChangeSexo = (e) => {
       setSexo(e.target.value); 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        agregarAlumno ({
            nombre_alumno:nombre,
            email_alumno:email,
            curso_alumno:curso,
            sexo_alumno :sexo,
            habla_ingles:hablaIngles,

        });

        setNombre("");
        setEmail("");
        setCurso("");
        setSexo("masculino");
        setHablaIngles(false);
    }
   

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Nombre del Alumno</label>
                <input 
                    type="text"
                    name="nombre_alumno"
                    className="form-control"
                    value={nombre} 
                    onChange={function(e) { setNombre(e.target.value); }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input 
                    type="email"
                    name="email_alumno"
                    className="form-control"
                    value={email} 
                    onChange={function(e) { setEmail(e.target.value); }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Seleccione el curso</label>
                <select name="curso_alumno"
                    className= "form-select"
                    value={curso}
                    onChange={(e) => setCurso(e.target.value)}
                    required 
            >
                <option value="">Seleccione el curso</option>
                <option value="ReacJs">ReactJS</option>
                <option value="Python">Python</option>
                <option value="NodeJS">NodeJS</option>
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="masculino">Sexo</label>
                    <input 
                        type="radio"
                        name="sexo_alumno"
                        value="masculino"
                        id = "masculino"
                        checked={sexo === "masculino"}
                        onChange={handleChangeSexo }
                    />
                    <label>Masculino</label>
                    <input 
                        type="radio"
                        name="sexo_alumno"
                        value="femenino"
                        id = "femenino"
                        checked={sexo === "femenino"}
                        onChange={function(e) { setSexo(e.target.value); }}
                    />
                    <label htmlFor="femenino">Femenino</label>
            </div>
            <div className="mb-3">
                <label className="form-label">Habla Ingles?</label>
                <input 
                type="checkbox"
                name="habla_ingles"
                id = "ingles"
                className="form-control"
                value={true} 
                checked = {hablaIngles}
                onChange={(e)=> setHablaIngles(e.target.checked)}
                />
                <label htmlFor="ingles">{textoIngles}</label>
            </div>
            <div>
                <button type="submit">Registrar nuevo elemento</button>
            </div>
        </form>
    );
};

// FormularioAlumno.propTypes = {
//     agregarAlumno: PropTypes.func.isRequired,
// };

export default FormularioAlumno;