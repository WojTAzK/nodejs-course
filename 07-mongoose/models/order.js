const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  products: [
    {
      productData: { type: Object, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  user: {
    name: { type: String, required: true },
    id: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
});

module.exports;
