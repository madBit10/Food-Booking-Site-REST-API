import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  restuarant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restuarant',
    required: true,
  },
  items: [{
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  }],
  totalAmount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'preparing', 'outForDelivery', 'delivered', 'cancelled'],
    default: 'pending',
  },
  deliveryAddress: {
    type: String,
    required: true,
  },
  deliveryTime: {
    type: Date,
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
  
});

const Order = mongoose.model('Order', orderSchema);

export default Order;