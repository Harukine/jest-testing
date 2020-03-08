const shoppingList = [
    'diapers',
    'kleenex',
    'beer',
    'trash bags',
    'paper towels',
    'beer',
    'beer'
];

test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');
});
