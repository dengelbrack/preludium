const { Maybe } = require ("../prelude");

test("new Maybe ()", () => {
    expect(new Maybe ()).toEqual({});
});

