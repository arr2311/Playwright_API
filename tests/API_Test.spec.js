import { test, expect } from '@playwright/test'

test.only('Get request', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('Janet');
    console.log(await response.json());

})

test('Post Request', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "morpheus",
            "job": "leader"
        }
    });
    expect(response.status()).toBe(201);
    const text = await response.text();
    expect(text).toContain('leader');
    console.log(await response.json());

})

test('Put Request', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            "name": "Black Label",
            "job": "leader"
        }
    });
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('Black Label');
    console.log(await response.json());

})

test('Delete request', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2');
    expect(response.status()).toBe(204);
    const text = await response.text(); 
    console.log(await response.json());

})