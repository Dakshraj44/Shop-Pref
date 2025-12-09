import mongoose from 'mongoose';

// This defines the structure for a single review.
// It will be embedded inside the product document.
const reviewSchema = new mongoose.Schema({
  user: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
}, { timestamps: true });


// This is the main blueprint for a product.
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  smallDescription: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  rating: { type: Number, required: true },
  images: [{ type: String, required: true }], // An array of image URLs/paths
  sizes: [{ type: String, required: true }], // An array of available sizes like '50ml', '100ml'
  reviews: [reviewSchema], // An array of review documents
}, { timestamps: true });

// Create the model from the schema, which allows us to interact with the 'products' collection.
const Product = mongoose.model('Product', productSchema);

export default Product;