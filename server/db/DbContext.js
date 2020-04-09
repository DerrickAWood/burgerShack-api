import BurgerSchema from "../models/Burger";
import mongoose from "mongoose";
import SideSchema from "../models/Side";
import ComboSchema from "../models/Combo";


class DbContext {
  Burgers = mongoose.model("burger", BurgerSchema);
  Sides = mongoose.model("side", SideSchema);
  Combos = mongoose.model("combo", ComboSchema);

}

export const dbContext = new DbContext();
