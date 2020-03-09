// testing promises
async function fetchData() {
    return 'peanut butter';
}
async function fetchDataFail() {
    throw 'error';
}

// returning a promise
test('the data is peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });
});

// testing catch
test('the fetch fails with an error', () => {
    expect.assertions(1);
    return fetchDataFail().catch(e => expect(e).toMatch('error'));
});

// testing resolves
test('the data is peanut butter', () => {
    return expect(fetchData()).resolves.toBe('peanut butter');
});
