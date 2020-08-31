const response = require('../../../helpers/response');
const errors  = require('../../../config/errors');
const category = require('../../../models/category');

module.exports.getCategories = async (req, res) => {
	try {
		const Categories = await category.find().select('slug title -_id');
		res.status(200).json(response.success(Categories));
	} catch (error) {
		res.status(errors.database_error.status).json(response.failure(errors.database_error));
	}
};