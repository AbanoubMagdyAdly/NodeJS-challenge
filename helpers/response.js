const success = (status = 1,data) => {
    return {
        status: status || 1,
        data: data || true
    }
}

const failure = (error) => {
    return {
        status: error.code || 1000,
        errors: error.msg || false
    }
}


module.exports.success = success;
module.exports.failure = failure;