import express from 'express';
import Restuarant from '../models/restuarant.js';

const resRouter = express.Router();

resRouter.post('/restuarants', async (req,res)=> {
  try {
    const restuarant = new Restuarant(req.body);
    const savedRes = await restuarant.save();
    res.status(200).json({savedRes});
  } catch(error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

export default resRouter;