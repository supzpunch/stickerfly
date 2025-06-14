import mongoose, { Schema, Document } from 'mongoose';

interface Size {
  width: number;
  height: number;
  unit: string;
}

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  images: string[];
  imageUrl?: string;
  category: string;
  sizes: Size[];
  inStock: boolean;
  featured: boolean;
  isCustom?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const SizeSchema = new Schema({
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  unit: { type: String, required: true, enum: ['in', 'cm'] }
});

const ProductSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    images: [{ type: String }],
    imageUrl: { type: String },
    category: { type: String, required: true },
    sizes: [SizeSchema],
    inStock: { type: Boolean, default: true },
    featured: { type: Boolean, default: false },
    isCustom: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Check if the model is already defined to prevent overwriting during hot reloads
const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

export { Product };
export default Product; 