const { Product, ProductSchema } = require('./products.model');
function setupModels(sequelize) {
    Product.init(ProductSchema, Product.config(sequelize));
}
module.exports = setupModels;