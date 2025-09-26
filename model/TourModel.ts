import mongoose from 'mongoose';

const tourSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String }, // e.g., "3 hours", "1 day"
  location: { type: String, required: true },
  images: [String], // URLs or Cloud storage links
  maxGroupSize: { type: Number, default: 10 },
  createdAt: { type: Date, default: Date.now },
});

const tourModel = mongoose.models.Tour || mongoose.model('Tour', tourSchema);
export default tourModel;
