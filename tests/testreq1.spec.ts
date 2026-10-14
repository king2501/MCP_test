import {test, expect} from '@playwright/test';

test('example test', async ({request}) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {headers: {'Content-Type': 'application/json'}, data: {title: 'foo', body: 'bar', userId: 1}});
  expect(response.status()).toBe(201);
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('title', 'foo');
  expect(responseBody).toHaveProperty('body', 'bar');
  expect(responseBody).toHaveProperty('userId', 1);
});