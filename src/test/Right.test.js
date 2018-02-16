const { Right } = require ("../index");

test("Right (1)", () => {
    expect(Right (1)).toEqual({"unRight": 1});
});

