import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

const Combo = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    burger: {type: ObjectId, ref: "Burger", required: true},
    sides: {type: ObjectId, ref: "Side", required: true}
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Combo;