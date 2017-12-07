module.exports = function (sequelize, DataTypes) {

    // Property Table

    var Property = sequelize.define("property", {
        // Giving the Author model a name of type STRING
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        property_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        property_add_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        city: {
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
        // Associating Users with Posts
        // When an Author is deleted, also delete any associated Posts
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
