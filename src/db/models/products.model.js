const { Model, DataTypes, Sequelize } = require('sequelize');

const PRODUCT_TABLE = 'products';

class Product extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'Product',
            timestamps: true 
        }
    }
}

const ProductSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'name'
    },
    description:{ 
        allowNull:false,
        type: DataTypes.STRING,
        field: 'address'
    },
    price:{
        allowNull: true,
        type: DataTypes.DOUBLE,
        field: 'phone'
    } 
}

module.exports = { Product, ProductSchema }