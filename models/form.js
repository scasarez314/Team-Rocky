module.exports = function (sequelize, DataTypes) {
  var Form = sequelize.define("Form", {

    name: DataTypes.STRING,
    telephone: DataTypes.STRING,
    email: DataTypes.STRING,
    date: DataTypes.DATE,
    Location: DataTypes.STRING,
    description: DataTypes.STRING


  });
  return Form;
};
