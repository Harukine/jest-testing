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

beforeEach(() => {
    initializeCityDatabase();
});

afterEach(() => {
    clearCityDatabase();
});

// test if database has this city
test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
});

// test if database does not have this city
test('city database does not have Toronto', () => {
    expect(isCity('Toronto')).toBeFalsy();
});
