module.exports = function (sequelize, DataTypes) {   
    // Address Table==================================

    var Address = sequelize.define("address", {
        // Giving the Author model a name of type STRING
        // property_add_id: DataTypes.INTEGER,
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
        // Associating Users with Posts
        // When an Author is deleted, also delete any associated Posts
        // Address.hasMany(models.Post, {
        //     onDelete: "cascade"
        // });
        Address.belongsTo(models.property, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Address;
};