'use strict';
const mockDBCalls = require('../database/index.js');

const getListOfAgesOfUsersWithHandler = async (request, response) => {
    const data = await mockDBCalls.getListOfAgesOfUsersWith(request.query.item);
    return response.status(200).send(JSON.stringify(data));
};

module.exports = (app) => {
    app.get('/users/age', getListOfAgesOfUsersWithHandler);
};