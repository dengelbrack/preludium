const { Either } = require ("../prelude");

test("new Either ()", () => {
    expect(new Either ()).toEqual({});
});

