import * as functions from 'firebase-functions';

const cors = require('cors')({
    origin: true,
});

export const helloWorld = functions.https.onRequest((request, response) => {
    console.log("new function")
    return cors(request, response, () => {
        response.status(200).send({
            books: ["Harry Potter"]
        });
    });
});
