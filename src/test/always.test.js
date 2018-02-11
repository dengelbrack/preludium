const { always } = require ("../preludium");

test("always (1) (2) to be 1", () => {
    expect(always (1) (2)).toBe(1);
});

test("always ([1]) (2) to equal [1]", () => {
    expect(always ([1]) (2)).toEqual([1]);
});

test("always ('1') (2) to be '1'", () => {
    expect(always ("1") (2)).toBe("1");
});

test("always ({\"n\": 1}) (2) to equal {\"n\": 1}", () => {
    expect(always ({"n": 1}) (2)).toEqual({"n": 1});
});

