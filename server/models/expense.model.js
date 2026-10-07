import mongoose from "mongoose";

const ExpenseSchema = mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },

  amount: {
    type: Number,
    min: 0,
    required: "Amount is required",
  },

  incurredOn: {
    type: Date,
    default: Date.now,
  },

  notes: {
    type: String,
    trim: true,
  },

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },

  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Expense", ExpenseSchema);
