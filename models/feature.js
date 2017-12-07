module.exports = function(sequelize, DataTypes) {


  var Feature = sequelize.define("features", {
    // Giving the features model a name of type STRING
    feature_name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
      timestamps: false,
      freezeTableName: true
    });

  Feature.associate = function (models) {
    // Associating features with property
    Feature.belongsTo(models.property, {
        foreignKey: {
            allowNull: false
        }
    });
  };



  return Feature;




};
