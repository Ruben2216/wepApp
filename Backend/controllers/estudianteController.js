import { insertarEstudiantes, obtenerEstudiantes } from "../config/dbpgAdmin.js";

export const saveEstudiante = async (req, res) => {
  const { documento, nombre, apellido, telefono, correo } = req.body;
  try {
    await insertarEstudiantes(documento, nombre, apellido, telefono, correo);
    console.log (req.body)
  } catch (error) {
    res.status(500).json({ message: "Error al guardar estudiante" });
  }
};

export const listEstudiantes = async (_req, res) => {
  try {
    const estudiantes = await obtenerEstudiantes();
    res.json(estudiantes);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener estudiantes" });
  }
};
