import pgPromise from "pg-promise";
import dotenv from "dotenv";

// Configurar dotenv para cargar variables de entorno desde el directorio raíz
dotenv.config();

const pgp = pgPromise();

const cn = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const dbConnection = pgp(cn);

async function pruebaConexion() {
    try {
        const fecha = await dbConnection.oneOrNone("SELECT NOW() AS fecha");
        console.log("Prueba de conexión establecida", fecha);
    } catch (error) {
        console.error("Error de conexión a la base de datos:", error);
    }
}

async function insertarEstudiantes(
    documento,
    nombre,
    apellido,
    telefono,
    correo
) {
    try {
        const insertar = await dbConnection.none(
            "INSERT INTO estudiantes (documento, nombre, apellido, telefono, correo) VALUES ($1, $2, $3, $4, $5)",
            [documento, nombre, apellido, telefono, correo]
        );
        console.log("Estudiante insertado exitosamente", insertar);
    } catch (error) {
        console.error("Error al insertar estudiante:", error);
    }
}
async function obtenerEstudiantes() {
    try {
        const estudiantes = await dbConnection.any("SELECT * FROM estudiantes");

        console.log(estudiantes);
    } catch (error) {
        console.error("Error al obtener estudiantes:", error);
    }
}

pruebaConexion();
export { insertarEstudiantes, obtenerEstudiantes };
