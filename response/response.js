'use strict'

exports.ok = function (values, res) {
    const data = {
        status: 200,
        values: values,
    };
    res.json(data);
    res.end();
}

exports.success = (stts, msg, res, rows) => {
    const data = {
        error: false,
        status: stts,
        message: msg,
        data: rows,
    };
    res.status(stts);
    res.json(data);
    res.end();
}

exports.error = (stts, msg, res) => {
    const dataError = {
        error: true,
        status: stts,
        message: msg,
    };
    res.status(stts);
    res.json(dataError);
    res.end();
}