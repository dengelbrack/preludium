const { Left } = require ("../prelude");

test("Left (\"foo\")", () => {
    expect(Left ("foo")).toEqual({"unLeft": "foo"});
});

