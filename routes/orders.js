import express from 'express';
import Order from '../models/order.js';

const orderRouter = express.Router();

orderRouter.post('/orders', async (req,res)=> {
  try {
    // place a order



    const newOrder = new Order(req.body);

    const saveOrder = await newOrder.save();
    res.status(200).json(saveOrder);
  } catch(error) {
    console.error(error.message);
    res.status(500).json({error: error.message});
  }
});

export default orderRouter;