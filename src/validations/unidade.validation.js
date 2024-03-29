const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createUnidade = {
  body: Joi.object().keys({
    userId: Joi.required().custom(objectId),
    nome: Joi.string().required(),
    email: Joi.string().required().email(),
    inep: Joi.string().required(),
    fone: Joi.string().required(),
    location: Joi.object()
      .keys({
        type: Joi.string(),
        coordinates: Joi.array().items(Joi.number()).required().length(2),
      })
      .required(),
    endereco: {
      cep: Joi.string().required(),
      logradouro: Joi.string().required(),
      quadra: Joi.string().optional().allow(''),
      lote: Joi.string().optional().allow(''),
      complemento: Joi.string().optional().allow(''),
      bairro: Joi.string().optional().allow(''),
      localidade: Joi.string().required(),
      uf: Joi.string().required(),
    },
  }),
};

const showAllUnidade = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const showUnidadeId = {
  params: Joi.object().keys({
    unidadeId: Joi.string().custom(objectId),
  }),
};

const updateUnidadeId = {
  params: Joi.object().keys({
    unidadeId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      userId: Joi.required().custom(objectId),
      turmaId: Joi.array().items(Joi.string()).optional().allow(''),
      funcionarioId: Joi.array().items(Joi.string()).optional().allow(''),
      inep: Joi.number().optional(),
      nome: Joi.string().optional(),
      fone: Joi.string().optional(),
      email: Joi.string().optional().email(),
      location: Joi.object()
        .keys({
          type: Joi.string(),
          coordinates: Joi.array().items(Joi.number()).required().length(2),
        })
        .optional(),
      endereco: {
        cep: Joi.string().optional(),
        logradouro: Joi.string().optional(),
        quadra: Joi.string().optional().allow(''),
        lote: Joi.string().optional().allow(''),
        complemento: Joi.string().optional().allow(''),
        bairro: Joi.string().optional().allow(''),
        localidade: Joi.string().optional(),
        uf: Joi.string().optional(),
      },
    })
    .min(1),
};

const deleteUnidade = {
  params: Joi.object().keys({
    unidadeId: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      deletado: Joi.boolean().required(),
    })
    .min(1),
};

module.exports = {
  createUnidade,
  showAllUnidade,
  showUnidadeId,
  updateUnidadeId,
  deleteUnidade,
};
