import * as express from 'express';
import patientInfoRouter from './patientinfo';
const router = express.Router();

router.use('/patientinfo', patientInfoRouter);

export default router;
