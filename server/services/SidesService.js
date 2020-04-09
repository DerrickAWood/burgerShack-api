import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class SidesService{
  async getAll(query = {}) {
    let sides = await dbContext.Sides.find(query);
    return sides;
  }

  async create(body){
    let side = await dbContext.Sides.create(body)
    return body
  }
  async getById(id) {
    let side = await dbContext.Sides.findById(id);
    if (!side) {
      throw new BadRequest("Invalid Id");
    }
    return side;
  }

  async edit(id, body){
    let side = await dbContext.Sides.findByIdAndUpdate(id, body, {new: true})
    return side
  }

  async delete(id){
    let side = await dbContext.Sides.findByIdAndDelete(id)
    return side
  }
}

export const sidesService = new SidesService();