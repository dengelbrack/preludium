const { Left } = require ("../index");

test("Left (\"foo\")", () => {
    expect(Left ("foo")).toEqual({"unLeft": "foo"});
});

