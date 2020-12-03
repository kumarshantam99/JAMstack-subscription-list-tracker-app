const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    try {
        const subscriptions = await table.select().firstPage();
        const formattedSubs = subscriptions.map((subscription) => ({
            id: subscription.id,
            ...subscription.fields,
        }));
        return formattedReturn(200, formattedSubs);
    } catch (err) {
        console.error(err);
        return formattedReturn(500, {msg :'Something Went Wrong'});
    }
};
