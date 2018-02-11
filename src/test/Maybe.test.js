const { Maybe } = require ("../preludium");

test("new Maybe ()", () => {
    expect(new Maybe ()).toEqual({});
});

