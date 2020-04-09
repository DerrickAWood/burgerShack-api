import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CombosService{
  async getAll(query = {}) {
    let combos = await dbContext.Combos.find(query);
    return combos;
  }

  async create(body){
    let combo = await dbContext.Combos.create(body)
    return body
  }
  async getById(id) {
    let combo = await dbContext.Combos.findById(id);
    if (!combo) {
      throw new BadRequest("Invalid Id");
    }
    return combo;
  }

  async edit(id, body){
    let combo = await dbContext.Combos.findByIdAndUpdate(id, body, {new: true})
    return combo
  }

  async delete(id){
    let combo = await dbContext.Combos.findByIdAndDelete(id)
    return combo
  }
}

export const combosService = new CombosService();