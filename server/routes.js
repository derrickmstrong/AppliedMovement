import * as express from 'express';

const router = express.Router();

router.get('/api', (req, res, next) => {
    res.json('Hafeeza Shahid');
});

export default router;
