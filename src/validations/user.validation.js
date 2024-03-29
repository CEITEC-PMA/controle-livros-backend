const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid('user', 'admin'),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUserById = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const userUpdate = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      unidadeId: Joi.array().items(Joi.string()).optional().allow(''),
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      nome: Joi.string(),
      role: Joi.string(),
      ativo: Joi.boolean(),
      deletado: Joi.boolean(),
      acesso: Joi.number(),
    })
    .min(1),
};

const updateAcessoZero = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
};

const deleteFalseUpdate = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
};

const modularUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object().keys({
    unidadeId: Joi.required().custom(objectId),
  }),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
};

const removeModulacaoUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object().keys({
    unidadeId: Joi.required().custom(objectId),
  }),
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  userUpdate,
  modularUser,
  deleteUser,
  removeModulacaoUser,
  deleteFalseUpdate,
  updateAcessoZero,
};
