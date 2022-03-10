'use strict';

/**
 *  seminario controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::seminario.seminario', ({ strapi }) => ({
  async find(ctx) {
    const date =
      ctx.query.filters && ctx.query.filters.data
      ? ctx.query.filters.data.$contains
      : undefined;

    if(date) {
      delete ctx.query.filters.data;
    }

    const seminarios = await super.find(ctx);

    const { meta } = seminarios;

    let data = seminarios.data;

    if(date) {
      data = data.filter(seminario => seminario.attributes.data.includes(date));
    }

    return { data, meta };
  }
}));
