const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    required: true,
  },
  orderDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "InTransit", "Delivered"],
    default: "Pending",
  },
  customer: {
    type: String,
    required: true,
  },
  shippingAddress: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ["Stripe", "VNPay", "CreditCard"],
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ["Pending", "Unpaid", "Paid"],
    default: "Pending",
  },
  products: [
    {
      productName: {
        type: String,
        required: true,
      },
      color: String,
      quantity: {
        type: Number,
        required: true,
      },
      unitPrice: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
