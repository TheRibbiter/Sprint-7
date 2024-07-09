// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "productsList": [
        {"id": 5, "quantity": 1
        }]
}

test('Status code should be 201', async () => {
    let actualStatusCode;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/orders`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        actualStatusCode = response.status;
    } catch (error) {
        console.error(error);
    }
    expect(actualStatusCode).toBe(201);
}); 

test('Check to see how many kits exist', async () => {
    let bodyResponse;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        bodyResponse = response.status;
    } catch (error) {
        console.error(error);
    }
    expect(bodyResponse).toBe(400);
}); 