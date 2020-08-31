const category = require('../models/category');

module.exports.setProductsfilters = async (productsFilters , categorySlug) => {
    let filters = {};
    if(categorySlug)
    {
        filters.category = await category.findOne({slug: categorySlug});
    }
    if(productsFilters){
        for (let [attr, value] of Object.entries(productsFilters))
                filters[`attributes.${attr}`] = value;
    }
    return filters;
}