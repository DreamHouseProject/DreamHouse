// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs")

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
    dob: DataTypes.DATE,
    gender: DataTypes.CHAR(6),
    password: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    state: {
      type: DataTypes.CHAR(2),
      allowNull: false,
    },
    zipcode: {
      type: DataTypes.INTEGER
    },
    telephone: DataTypes.INTEGER,
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
  }, {
      timestamps: false,
      freezeTableName: true,
      // Hooks are automatic methods that run during various phases of the User Model lifecycle
      // In this case, before a User is created, we will automatically hash their password
      hooks: {
        beforeCreate: function (user, options) {
          user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
        }
      },
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

  // Creating a custom instance method for our User model. This will check if an unhashed password entered by
  // The user can be compared to the hashed password stored in our database. This method will be available on
  // any instance of the user model.
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
  }

  return User;

};
