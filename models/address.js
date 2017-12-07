module.exports = function (sequelize, DataTypes) {   
    // Address Table

    var Address = sequelize.define("address", {
        // Giving the address model a name of type STRING
        city: {
            allowNull: false,
            type: DataTypes.STRING
        },
        plot_num: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        property_name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        floor_num: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        area_name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        state: {
            allowNull: false,
            type: DataTypes.STRING
        },
        country: {
            allowNull: false,
            type: DataTypes.STRING
        },
        zip: { 
            allowNull: false,
            type: DataTypes.INTEGER
        }
    }, {
            timestamps: false,
            freezeTableName: true
        });

    Address.associate = function (models) {
        // Associating address with property
        Address.belongsTo(models.property, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Address;
};