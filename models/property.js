module.exports = function (sequelize, DataTypes) {

    // Property Table

    var Property = sequelize.define("property", {
        // Giving the Author model a name of type STRING
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
            // autoIncrement: true
        },
        property_type: DataTypes.STRING,
        property_add_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        city: DataTypes.STRING,
        property_date: DataTypes.DATE,
        no_of_rooms: DataTypes.INTEGER,
        area_size: DataTypes.INTEGER,
        per_unit_price: DataTypes.FLOAT
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
