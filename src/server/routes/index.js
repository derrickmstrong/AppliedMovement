import * as express from 'express';
import patientInfoRouter from './patientinfo';
import mailerRouter from './mailer';
const router = express.Router();

router.use('/patientinfo', patientInfoRouter);
router.use('/mailer', mailerRouter);

export default router;
