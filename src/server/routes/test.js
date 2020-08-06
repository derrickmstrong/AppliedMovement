import * as express from 'express';
import db from '../db';
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
      const queries = await db.queries.all();
      res.json(queries);
    } catch (error) {
      next(error);
    }
});

// router.get('/:id?', async (req, res, next) => {
//   const id = Number(req.params.id);
//   if (id) {
//     try {
//       const [query] = db.queries.one(id);
//       res.json(query);
//     } catch (error) {
//       next(error);
//     }
//   } else {
//     try {
//       const queries = db.queries.all();
//       res.json(queries);
//     } catch (error) {
//       next(error);
//     }
//   }
// });

router.delete('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    let response = await db.queries.destroy(id);
    res.json(response);
  } catch (error) {
    console.log(error)
  }
});

export default router;
