module.exports = function (sequelize, DataTypes) {

    // Property Table

    var Property = sequelize.define("property", {
        // Giving the property model a name of type STRING
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        property_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        property_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        no_of_rooms: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        area_size: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        per_unit_price: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    Property.associate = function (models) {
        // Associating property with features, rooms and address
        // When an property is deleted, also delete any associated tables
        Property.hasMany(models.features, {
            onDelete: "cascade"
        });
        Property.hasMany(models.rooms, {
            onDelete: "cascade"
        });
        Property.hasMany(models.address, {
            onDelete: "cascade"
        });
    };
 

    return Property;




};
