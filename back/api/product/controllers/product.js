'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

// module.exports = {};


const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      data.user = ctx.state.user.id;
      entity = await strapi.services.product.create(data, { files });
    } else {
      ctx.request.body.user = ctx.state.user.id;
      entity = await strapi.services.product.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.product });
  },

  /**
   * Update a record.
   *
   * @return {Object}
   */

  async update(ctx) {
    const { id } = ctx.params;

    let entity;

    const [product] = await strapi.services.product.find({
      id: ctx.params.id,
      'user.id': ctx.state.user.id,
    });

    if (!product) {
      return ctx.unauthorized(`You can't update this entry`);
    }

    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.product.update({ id }, data, {
        files,
      });
    } else {
      entity = await strapi.services.product.update({ id }, ctx.request.body);
    }

    return sanitizeEntity(entity, { model: strapi.models.product });
  },
  /**
   * Update a record.
   *
   * @return {Object}
   */

  async delete(ctx) {
    const { id } = ctx.params;

    let entity;

    const [product] = await strapi.services.product.find({
      id: ctx.params.id,
      'user.id': ctx.state.user.id,
    });

    if (!product) {
      return ctx.unauthorized(`You can't update this entry`);
    }

    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.product.update({ id }, data, {
        files,
      });
    } else {
      entity = await strapi.services.product.update({ id }, ctx.request.body);
    }

    return sanitizeEntity(entity, { model: strapi.models.product });
  },
};
