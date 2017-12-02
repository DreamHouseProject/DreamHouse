module.exports = function (sequelize, DataTypes) {

    // Seller Table==============================
    var Seller = sequelize.define("sellers", {
        // Giving the Author model a name of type STRING
        prop_type: DataTypes.STRING,
        post_property_for: DataTypes.STRING

    }, {
            timestamps: false,
            freezeTableName: true
        });

    Seller.associate = function (models) {
        // Associating Users with Posts
        // When an Author is deleted, also delete any associated Posts
        // Seller.hasMany(models.Post, {
        //     onDelete: "cascade"
        // });
        Seller.belongsTo(models.users, {
            foreignKey: {
                allowNull: false
            }
        });
    };


   
    return Seller;




};
