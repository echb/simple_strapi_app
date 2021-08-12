'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {};



// speed up? ---->
// const { sanitizeEntity } = require('strapi-utils');

// module.exports = {
//   async find(ctx) {
//     let entities;
//     if (ctx.query._q) {
//       entities = await strapi.services.category.search(ctx.query, []);
//     } else {
//       entities = await strapi.services.category.find(ctx.query, []);
//     }

//     return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.category }));
//   },
// };
