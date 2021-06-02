import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Star = new Schema(
  {
    mass: { type: Number, required: true },
    color: { type: String, required: true },
    galaxyId: { type: Schema.Types.ObjectId, ref: 'Galaxy', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }

)

Star.virtual('galaxy', {
  localField: 'galaxyId',
  foreignField: '_id',
  ref: 'Galaxy'
})

export default Star
