import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class BurgersService{
  async getAll(query = {}) {
    let burgers = await dbContext.Burgers.find(query);
    return burgers;
  }

  async create(body){
    let burger = await dbContext.Burgers.create(body)
    return body
  }
  async getById(id) {
    let burger = await dbContext.Burgers.findById(id);
    if (!burger) {
      throw new BadRequest("Invalid Id");
    }
    return burger;
  }

  async edit(id, body){
    let burger = await dbContext.Burgers.findByIdAndUpdate(id, body, {new: true})
    return burger
  }

  async delete(id){
    let burger = await dbContext.Burgers.findByIdAndDelete(id)
    return burger
  }
}

export const burgersService = new BurgersService();