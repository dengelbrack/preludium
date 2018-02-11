const { Right } = require ("../preludium");

test("Right (1)", () => {
    expect(Right (1)).toEqual({"unRight": 1});
});

