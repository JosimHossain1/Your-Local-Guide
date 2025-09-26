import mongoose from "mongoose";

const guideSchema = new mongoose.Schema({
  bio: { type: String, required: true },
  languages: [String],
  specialties: [String],
  rating: { type: Number, default: 0 },
  profilePicture: { type: String },
  tours: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tour" }],
  verified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const guideModel =  mongoose.models.Guide || mongoose.model("Guide", guideSchema);

export default guideModel