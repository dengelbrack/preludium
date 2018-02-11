const { Either } = require ("../preludium");

test("new Either ()", () => {
    expect(new Either ()).toEqual({});
});

