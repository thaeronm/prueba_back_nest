/**
 * Controllers
 *
 * Desde aqui manejamos los servicios de los diferentes modulos
 */

// const service = require('./service');

const controller = {};

controller.findAll = async (req, res, next) => {
  // const body = await val.create(req.body);
  // req.data = await service.findAll();
  return next();
};

controller.findOne = async (req, res, next) => {
  // req.data = await service.findOne();
  return next();
};

controller.create = async (req, res, next) => {
  // req.data = await service.create();
  return next();
};

controller.update = async (req, res, next) => {
  req.data = await service.update();
  return next();
};

controller.delete = async (req, res, next) => {
  // req.data = await service.delete();
  return next();
};

module.exports = controller;
