// eslint-disable-next-line no-undef
const config = require('../config');


test('Check response status code', async () => {
	let actualStatus;
		try {
			const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
			actualStatus = response.status;
	
			} catch (error) {
			console.error(error);
	
		}
	expect(actualStatus).toBe(200);
});

test('Check response body', async () => {
	let actualBody;
		try {
			const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
			actualBody = await response.json();
	
			} catch (error) {
			console.error(error);
	
		}
	expect(actualBody["productsCount"]).toBe(39);
});

