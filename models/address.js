module.exports = function (sequelize, DataTypes) {   
    // Address Table

    var Address = sequelize.define("address", {
        // Giving the address model a name of type STRING
        
        plot_num: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        floor_num: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        city: {
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
        zipcode: { 
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