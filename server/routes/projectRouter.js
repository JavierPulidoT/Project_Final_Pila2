// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador de proyectos
import projectController from '../controllers/projectController';

// Creo una instancia del router
const router = new Router();

/* --- GET --- */
// Listar proyectos
// GET /projects/ | GET /projects/index
router.get(['/', '/index'], projectController.index);

// Envia el formulario para registrar una una Crypto-Coin
// GET /projects/add
router.get('/add', projectController.add);

// Exportando en enrutador Projects
export default router;
