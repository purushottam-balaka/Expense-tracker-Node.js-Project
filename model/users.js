const Sequelize=require('sequelize');

const db=require('../util/database');

const Users=db.define('User',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    gmail:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
       
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false,
    }

});

module.exports=Users;