const functions = require('../functions');

// test('Adds 2 + 2 to equal 4', () => {
//     expect(functions.add(2,2)).toBe(4);
// });

// test('Adds 2 + 2 to NOT equal 5', () => {
//     expect(functions.add(2,2)).not.toBe(5);
// });


test('return null', () => {
    expect (functions.isNull()).toBe(null);
});

//fout deze methode is beter om te checken of iets Null is:
test('return null', () => {
    expect (functions.isNull()).toBeNull();
});


test('is checkValue 5', ()=> {
    expect (functions.checkValue(5)).toBe(5);
});

test('is user Brad Traversy', () => {
    expect(functions.createUser()).toBe('{"firstName":"Brad","lastName":"Traversy"}');
});