const _ = require('./customLodash');

test('Should be return new array with chunck', () => {
    // console.log(_.chunck([2, 3, 4, 5], 2));
    expect(_.chunck([2, 3, 4, 5], 2)).toEqual([[2, 3], [4, 5]]);
});
test('Should be return new array with elements not falsy values', () => {
    // console.log(_.compact([2, 3, null, 5]));
    expect(_.compact([2, 3, null, 5])).toEqual([2, 3, 5]);
});

test('Should be return new array with size empety', () => {
    // console.log(_.drop([2, 3, 4, 5]));
    expect(_.drop([2, 3, 4, 5])).toEqual([3, 4, 5]);
});

test('Should be return new array drop', () => {
    // console.log(_.drop([2, 3, 4, 5], 0));
    expect(_.drop([2, 3, 4, 5], 0)).toEqual([2, 3, 4, 5]);
});

test('Should be returns the new array of grouped elements.', () => {
    // console.log(_.zip([2, 3], ['null', 'arg'], [6, 7]));
    expect(_.zip([2, 3], ['null', 'arg'], [6, 7]))
        .toEqual([[2, 'null', 6], [3, 'arg', 7]]);
});
test('Should be returns the new array of grouped elements.', () => {
    // console.log(_.take([2, 3, 6, 7]));
    expect(_.take([2, 3, 6, 7]))
        .toEqual([2]);
});

test('Should be returns the slice of array.', () => {
    const users = [
        { user: 'barney', active: false },
        { user: 'fred', active: false },
        { user: 'pebbles', active: true },
    ];

    console.log(_.dropWhile(users, (o) => !o.active));
    expect(_.dropWhile(users, (o) => !o.active))
        .toEqual([{ user: 'pebbles', active: true }]);
});
