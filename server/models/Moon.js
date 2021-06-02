import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Moon = new Schema(
  {
    planetId: { type: String, required: true },
    starId: { type: String, required: true },
    galaxyId: { type: String, required: true },
    mass: { type: Number, required: true },
    color: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Moon
