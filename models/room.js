module.exports = function (sequelize, DataTypes) {
    
    var Room = sequelize.define("rooms", {
        // Giving the Author model a name of type STRING
        // property_id: DataTypes.INTEGER,
        room_name: DataTypes.STRING,
        area: DataTypes.INTEGER,
        image: DataTypes.BLOB
    }, {
            timestamps: false,
            freezeTableName: true
        });

    Room.associate = function (models) {
        // Associating Users with Posts
        // When an Author is deleted, also delete any associated Posts
        // Room.hasMany(models.Post, {
        //     onDelete: "cascade"
        // });
        Room.belongsTo(models.property, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Room;




};
