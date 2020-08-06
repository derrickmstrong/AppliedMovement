import * as express from 'express';
import testRouter from './test';
import patientInfoRouter from './patientinfo';
const router = express.Router();

router.use('/test', testRouter);
router.use('/patientinfo', patientInfoRouter);

export default router;
