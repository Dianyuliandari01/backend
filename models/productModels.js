import { Sequelize } from "sequelize";
import db from '../config/db.js';

const {DataTypes} = Sequelize;

//create table and type-data
const Product = db.define('product',{
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName: true
});

export default Product;

//function table product
(async()=>{
    await db.sync();
})();