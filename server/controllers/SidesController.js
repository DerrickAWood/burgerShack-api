import express from "express";
import BaseController from "../utils/BaseController";
import { sidesService } from "../services/SidesService";
import { BadRequest } from "../utils/Errors";

export class SidesController extends BaseController {
  constructor() {
    super("api/Sides");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      let sides = await sidesService.getAll()
      res.send(sides)
    } catch (error) {
      next(error);
    }
  }

  async getById(req,res,next){
    try {
      let side = await sidesService.getById(req.params.id)
      if(!side){
        throw new BadRequest("bad id")
      }
      res.send(side)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let side = await sidesService.create(req.body)
      res.send(side);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next){
    try {
      let side = await sidesService.edit(req.params.id, req.body)
      res.send(side)
    } catch (error) {
      next(error)
    }
  }

  async delete(req,res,next){
    try {
      let side = await sidesService.delete(req.params.id)
      res.send(side)
    } catch (error) {
      next(error)
    }
  }
}
