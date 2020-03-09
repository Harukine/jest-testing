// setting up and tearing down before each test
let database = [];

function initializeCityDatabase() {
    database.push('Vienna');
    database.push('San Juan');
}

function clearCityDatabase() {
    database = [];
}

function isCity(city) {
    return database.includes(city);
}

beforeAll(() => {
    return initializeCityDatabase();
});

afterAll(() => {
    return clearCityDatabase();
});

// test if cities are in the db
test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
});
