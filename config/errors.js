const errors = {
    database_error: {
        code: 1001,
        msg: 'Database Error',
        status: 500,
    },
    server_error: {
        code: 1002,
        msg: 'Server Error',
        status: 500,
    },
    not_found: {
        code: 1003,
        msg: 'Route Not Found',
        status: 404,
    },
}

module.exports.errors = errors;