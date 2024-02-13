import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber : {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true,
  },
  profilePictures: {
    type: String,
  },
  orderHistory : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  }],
  favRestaurant: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restuarant',
  }],
  socialMediaProfile: {
    facebook: String,
    instagram: String,
  },

});

userSchema.pre('save', async function (next) {
  const user = this;
  if(user.isModified('password') || user.isNew) {
    try {
      const hash = await bcrypt.hash(user.password, 10);
      user.password = hash;
    } catch(error) {
      return next(error);
    }
  }
  next();
});

const User = mongoose.model('User', userSchema);

export default User;