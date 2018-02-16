const { Either } = require ("../index");

test("new Either ()", () => {
    expect(new Either ()).toEqual({});
});

