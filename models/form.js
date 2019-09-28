module.exports = function (sequelize, DataTypes) {
  var Form = sequelize.define("Form", {

    name: DataTypes.STRING,
    email: DataTypes.STRING,
    date: DataTypes.DATE,
    zipcode: DataTypes.INTEGER,
    description: DataTypes.STRING


  });
  return Form;
};
