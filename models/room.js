module.exports = function (sequelize, DataTypes) {
    
    var Room = sequelize.define("rooms", {
        // Giving the room model a name of type STRING
        room_name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        area: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        image: {
            allowNull: false,
            type: DataTypes.BLOB
        },
    }, {
            timestamps: false,
            freezeTableName: true
        });

    Room.associate = function (models) {
        // Associating rooms with property
        
        Room.belongsTo(models.property, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Room;




};
