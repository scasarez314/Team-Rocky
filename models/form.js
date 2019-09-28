module.exports = function (sequelize, DataTypes) {
  var Form = sequelize.define("transcend_db", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    date: DataTypes.DATE,
    zipcode: DataTypes.INTEGER,
    description: DataTypes.TEXT
  });
  return Form;
};
