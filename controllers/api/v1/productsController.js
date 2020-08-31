const response = require('../../../helpers/response');
const errors  = require('../../../config/errors');
const productService = require('../../../services/productService');

module.exports.getProducts = async (req, res) => {
	try {
		const paginationOptions = {
			pageSize: parseInt(req.query.limit),
			page: parseInt(req.query.page),
			skip: (parseInt(req.query.page) - 1) * parseInt(req.query.limit)
		}
		
		const {products, totalProductsCount} = await productService.getProducts(paginationOptions, req.query.filter, req.params.categorySlug)

		const pagination = response.paginate(products.length, totalProductsCount, paginationOptions.pageSize, paginationOptions.page);

		res.status(200).json(response.success({products}, pagination));
	} catch (error) {
		console.log(error)
		res.status(errors.database_error.status || 500).json(response.failure(errors.database_error));
	}
};