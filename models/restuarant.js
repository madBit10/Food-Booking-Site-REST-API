import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  cuisine: {
    type: String,
    required: true
  },
  openingHours: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  menu: [{
    itemName: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    price: {
      type: Number,
      required: true
    }
  }],
  ratings: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    rating: {
      type: Number,
      required: true
    },
    review: {
      type: String
    }
  }],
});

const Restuarant = mongoose.model('Restuarant', restaurantSchema);

export default Restuarant;