import * as express from 'express';
import db from '../db';
import { orm } from '../db/connection';

const router = express.Router();


router.get('/:id', async (req, res, next) => {
  orm.get('patientinfo', { id: req.params.id }, (err, results) => {
    if (err || results.length < 1) {
      res.status(500);
    }
    res.json(results[0]);
  });
});

// WORKING - GET /api/patientinfo/1 or GET /api/patientinfo
router.get('/:id?', async (req, res, next) => {
  const id = Number(req.params.id);
  if (id) {
    try {
      const [patientRecord] = await db.queries.one(id);
      res.json(patientRecord);
    } catch (error) {
      next(error);
    }
  } else {
    try {
      const queries = await db.queries.all();
      res.json(queries);
    } catch (error) {
      next(error);
    }
  }
});

// In PROGRESS - POST /api/patientinfo/
router.post('/', async (req, res, next) => {
  const record = req.body;
  try {
    const result = await db.queries.insert(
      record.name,
      record.dateOfBirth,
      record.phone,
      record.email, 
    );
    res.json({ result });
  } catch (error) {
    next(error);
  }
});

// PUT /api/chirps/1
router.put('/:id', async (req, res, next) => {
  const id = Number(req.params.id);
  const chirp = req.body;
  try {
    await db.chirps.update(id, chirp.content);
    res.json({ msg: 'edited', id });
  } catch (error) {
    next(error);
  }
});

// WORKING -  DELETE /api/chirps/1
router.delete('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    let response = await db.queries.destroy(id);
    res.json(response);
  } catch (error) {
    console.log(error);
  }
});

// // Search Component
// router.get('/search/:term', (req, res) => {
//   connection.execute('SELECT * FROM patientinfo WHERE name LIKE ?',[req.params.term+'%'],(err, results)=> {
//     res.json(results)
//   })
// })

// // BY ID
// router.get('/:id', async (req, res, next) => {
//   orm.get('patientinfo', { id: req.params.id }, (err, results) => {
//     if (err || results.length < 1) {
//       res.status(500);
//     }
//     res.json(results[0]);
//   });
// });

// // POST 
// router.post('/', async (req, res, next) => {
//   orm.insert('patientinfo', req.body, (err, result) => {
//     res.json({ id: result.insertId });
//   });
// });


export default router;
