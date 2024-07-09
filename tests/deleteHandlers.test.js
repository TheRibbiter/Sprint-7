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

requestBody : { productsList: [
	{
		id: 2,
		quantity: 1
	},
	
]};


const requestBodyCreateKit = {
    "productsList": [
        {
        "id": 2,
        "quantity": 1
        }
    ]
}

test('Response body deletes the kit', async () => {
    let postResponseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBodyCreateKit)
        });

        postResponseBody = await response.json();
    } catch(error) {
            console.error(error);
    }

    let actualResponseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
            method: 'DELETE'
        })
        const postResponseBody = await response.json();
        actualResponseBody = postResponseBody.ok;
    } catch(error) {
        console.error(error);
    }

    expect(actualResponseBody).toBe(true);
});

