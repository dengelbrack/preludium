const { Left } = require ("../preludium");

test("Left (\"foo\")", () => {
    expect(Left ("foo")).toEqual({"unLeft": "foo"});
});

