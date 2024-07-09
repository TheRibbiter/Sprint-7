// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {}

requestBody : { productsList: [
	{
		id: 1,
		quantity: 1
	},
	{
		id: 6,
		quantity: 1
	}
]};

test('Status code check', async () => {
    let actualstatusCode;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        actualstatusCode = response.status;
    } catch (error) {
        console.error(error);
    }
    expect(actualstatusCode).toBe(200);
}); 


test('Response body should be true', async () => {
let actualresponseBody;
try {
	const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
		method: 'PUT',
		headers: {
		'Content-Type': 'application/json'
		},
		body: JSON.stringify(this.requestBody)
	});
		actualresponseBody = await response.json();
} catch (error) {
	console.error(error);
}
	expect(actualresponseBody["ok"]).toBe(true);
});