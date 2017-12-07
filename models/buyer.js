'use strict';
module.exports = function (sequelize, DataTypes) {
   
    // Buyer Table
    var Buyer = sequelize.define("buyers", {
        // Giving the buyers model a name of type STRING
        prop_type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        min_area: {
            type:DataTypes.FLOAT
        },
        max_area: {
            type:DataTypes.FLOAT
        },
        min_budget: {
            type:DataTypes.FLOAT
        },
        max_budget: {
            type:DataTypes.FLOAT
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    Buyer.associate = function (models) {
        // Associating buyers with users
       Buyer.belongsTo(models.users,{
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Buyer;




};
