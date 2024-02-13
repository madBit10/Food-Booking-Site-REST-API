import express from 'express'
import auth from '../middleware/auth.js';
const userRouter = express.Router();
import User from "../models/user.js";

userRouter.get('/user', auth, async(req,res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);
    const userName = user.name;
    res.status(200).json({ name: userName });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

userRouter.post('/register', async(req,res)=> {
  try {
    const {
      name,
      email,
      password,
      phoneNumber,
      address,
      profilePictures,
      orderHistory,
      favRestaurant,
      socialMediaProfile,
  
    } = req.body;
  
    const newUser = new User({
      name,
      email,
      password,
      phoneNumber,
      address,
      profilePictures,
      orderHistory,
      favRestaurant,
      socialMediaProfile,
    });
  
    const savedUser = await newUser.save();
  
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
  
});

export default userRouter;