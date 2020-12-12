const config = require("../config/config");

module.exports = (sequelize, dataTypes) => {
    let alias = "User";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        calle: {
            type: dataTypes.STRING
        },
        numero: {
            type: dataTypes.INTEGER,
        },
        localidad: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        admin: {
            type: dataTypes.BOOLEAN
        },
        telefono: {
            type: dataTypes.INTEGER
        },
        password: {
            type: dataTypes.STRING,
        }
    }
    let config = {
        tableName: "users", //el mismo nombre en el modelo
        timestamps: false
    }

    const User = sequelize.define(alias,cols,config)


    return User;
}