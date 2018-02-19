const typeorm = require("typeorm");
// const Post = require("./model/Post").Post;
// const Category = require("./model/Category").Category;

module.exports.add = function(msg, data, callback) {
	setTimeout(() => {callback()}, 3000);
};