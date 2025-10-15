import { Router } from "express";
import { saveEstudiante, listEstudiantes } from "../controllers/estudianteController.js";

const router = Router();

router.post("/save", saveEstudiante);
router.get("/save", listEstudiantes);

export default router;
