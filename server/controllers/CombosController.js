import express from "express";
import BaseController from "../utils/BaseController";
import { combosService } from "../services/combosService";
import { BadRequest } from "../utils/Errors";

export class CombosController extends BaseController {
  constructor() {
    super("api/Combos");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      let combos = await combosService.getAll()
      res.send(combos)
    } catch (error) {
      next(error);
    }
  }

  async getById(req,res,next){
    try {
      let combo = await combosService.getById(req.params.id)
      if(!combo){
        throw new BadRequest("bad id")
      }
      res.send(combo)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let combo = await combosService.create(req.body)
      res.send(combo);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next){
    try {
      let combo = await combosService.edit(req.params.id, req.body)
      res.send(combo)
    } catch (error) {
      next(error)
    }
  }

  async delete(req,res,next){
    try {
      let combo = await combosService.delete(req.params.id)
      res.send(combo)
    } catch (error) {
      next(error)
    }
  }
}
