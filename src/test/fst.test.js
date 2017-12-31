const { fst } = require ("../prelude");

test("first item of pair [1,2] is 1", () => {
    expect(fst ([1,2])).toBe(1);
});

