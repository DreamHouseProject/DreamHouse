module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("users", {
    // Giving the Author model a name of type STRING
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    user_type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    fname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    lname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    dob: DataTypes.DATE,
    gender: DataTypes.CHAR(10),
    contact: DataTypes.INTEGER,
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  }, {
      timestamps: false,
      freezeTableName: true
    });

  User.associate = function (models) {
    // Associating Users with Posts
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.buyers, {
      onDelete: "cascade"
    });
    User.hasMany(models.sellers, {
      onDelete: "cascade"
    });
  };


  return User;




};
