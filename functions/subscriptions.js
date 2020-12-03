const formattedReturn = require('./helpers/formattedReturn');
const getSubs = require('./helpers/getSubs');
const createSubs = require('./helpers/createSubs');
const deleteSubs = require('./helpers/deleteSubs');
const updateSubs = require('./helpers/updateSubs');
exports.handler = async (event) => {
    if (event.httpMethod === 'GET') {
        return await getSubs(event);
    } else if (event.httpMethod === 'POST') {
        return await createSubs(event);
    } else if (event.httpMethod === 'PUT') {
        return await updateSubs(event);
    } else if (event.httpMethod === 'DELETE') {
        return await deleteSubs(event);
    } else {
        return formattedReturn(405, {});
    }
};
