const success = (data, metaData) => {
    res =  {
        status: 1,
        data: data || true
    }
    if(metaData){
        res._metadata = metaData
    }
    return res;
}

const failure = (error) => {
    return {
        status: error.code || 1000,
        errors: error.msg || false
    }
}

const paginate = (count, totalProductsCount, PageSize, page) => {
    return {
        current_page: page || 1,
        per_page: PageSize,
        page_count: count,
        total_count: totalProductsCount,
        last_page: Math.ceil(totalProductsCount / PageSize) || 1
    }
}


module.exports.success = success;
module.exports.failure = failure;
module.exports.paginate = paginate;