module.exports = function(sequelize, DataTypes) {


  var Feature = sequelize.define("features", {
    // Giving the Author model a name of type STRING
    feature_name: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
      timestamps: false,
      freezeTableName: true
    });

  Feature.associate = function (models) {
    // Associating Users with Posts
    // When an Author is deleted, also delete any associated Posts
    // Feature.hasMany(models.Post, {
    //   onDelete: "cascade"
    // });
    Feature.belongsTo(models.property, {
        foreignKey: {
            allowNull: false
        }
    });
  };



  return Feature;




};
