const { setProductsfilters } = require('../helpers/productsFilers');
const product = require('../models/product');



const getProducts = async (pagination, filter, category) => {
    // set Filters
    const filters = await setProductsfilters(filter, category)

    // Get all count
    const totalProductsCount = await product.countDocuments(filters);

    // find products
    const products = await product.find(filters).select('product_code title -_id').skip(pagination.skip).limit(pagination.pageSize);

    return {
        totalProductsCount,
        products
    }
}


module.exports.getProducts = getProducts;