// setting up and tearing down before each test
let database = [];
let foodDatabase = new Map();

function initializeCityDatabase() {
    database.push('Vienna');
    database.push('San Juan');
}
function initializeFoodDatabase() {
    foodDatabase.set(database[0], 'Wiener Schnitzel');
    foodDatabase.set(database[1], 'Mofongo');
}

function clearCityDatabase() {
    database = [];
}

function isCity(city) {
    return database.includes(city);
}
function isValidCityFoodPair(key, value){
    return foodDatabase.get(key) === value;
}
// Applies to all tests in this file
beforeEach(() => {
    return initializeCityDatabase();
});

test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
});

describe('matching cities to foods', () => {
    // Applies only to tests in this describe block
    beforeEach(() => {
        return initializeFoodDatabase();
    });

    test('Vienna <3 sausage', () => {
        expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
    });

    test('San Juan <3 plantains', () => {
        expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
    });
});
