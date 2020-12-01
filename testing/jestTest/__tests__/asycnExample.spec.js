async function fetchDataOverApi() {
  return 'John';
}

//assume fetchDataOverApi returns data from external api and function is called from another file
describe('new account creations checks', () => {
  //non async example
  test.skip('the user data for user 1', () => {
    const data = fetchDataOverApi();
    expect(data).toBe('John');
  });

  // async example
  test('the user data for user 1', async () => {
    const data = await fetchDataOverApi(); // await keyword
    expect(data).toBe('John');
  });
});
