const Users = require("./users.model");
const Posts = require("./posts.model");
const Categories = require("./categories.model");

const initModels = () => {
  Posts.belongsTo(Users);
  Users.hasMany(Posts);

  Posts.belongsTo(Categories);
  Categories.hasMany(Posts);
  /* Users.hasMany(Posts, { foreignKey: "id" });
  Posts.belongsTo(Users, { foreignKey: "id", sourceKey: "created_by" });

  Categories.hasMany(Posts, { foreignKey: "id" });
  Posts.belongsTo(Categories, { foreignKey: "id", sourceKey: "category_id" }); */
};

module.exports = initModels;
