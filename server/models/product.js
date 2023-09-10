import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    done: {
      type: Boolean,
      default: false,
    },
    price: {type: Number, required: true},
    image: { type: String, required: true},
    tags: [{ type: String, trim: true }],
    date: { type: Date },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", ProductSchema);
