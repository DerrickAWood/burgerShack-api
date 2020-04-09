import express from "express";
import BaseController from "../utils/BaseController";
import { burgersService } from "../services/BurgersService";
import { BadRequest } from "../utils/Errors";

export class BurgersController extends BaseController {
  constructor() {
    super("api/Burgers");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      let burgers = await burgersService.getAll()
      res.send(burgers)
    } catch (error) {
      next(error);
    }
  }

  async getById(req,res,next){
    try {
      let burger = await burgersService.getById(req.params.id)
      if(!burger){
        throw new BadRequest("bad id")
      }
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let burger = await burgersService.create(req.body)
      res.send(burger);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next){
    try {
      let burger = await burgersService.edit(req.params.id, req.body)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async delete(req,res,next){
    try {
      let burger = await burgersService.delete(req.params.id)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }
}
