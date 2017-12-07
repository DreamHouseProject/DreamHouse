module.exports = function (sequelize, DataTypes) {

    // Seller Table==============================
    var Seller = sequelize.define("sellers", {
        // Giving the Seller model a name of type STRING
        prop_type: DataTypes.STRING,
        post_property_for: DataTypes.STRING

    }, {
            timestamps: false,
            freezeTableName: true
        });

    Seller.associate = function (models) {
        // Associating seller with users
       
        Seller.belongsTo(models.users, {
            foreignKey: {
                allowNull: false
            }
        });
    };


   
    return Seller;




};
