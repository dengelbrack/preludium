const { id } = require ("../prelude");

test("id (1) to be 1", () => {
    expect(id (1)).toBe(1);
});

test("id ([1]) to equal [1]", () => {
    expect(id ([1])).toEqual([1]);
});

test("id ('1') to be '1'", () => {
    expect(id ("1")).toBe("1");
});

test("id ({\"n\": 1}) to equal {\"n\": 1}", () => {
    expect(id ({"n": 1})).toEqual({"n": 1});
});

