'use strict';
module.exports = function (sequelize, DataTypes) {
   
    // Buyer Table
    var Buyer = sequelize.define("buyers", {
        // Giving the Author model a name of type STRING
        // user_id: DataTypes.INTEGER,
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
        // Associating Users with Posts
        // When an Author is deleted, also delete any associated Posts
       Buyer.belongsTo(models.users,{
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Buyer;




};
