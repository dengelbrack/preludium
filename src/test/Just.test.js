const { Just } = require ("../preludium");

test("Just (1)", () => {
    expect(Just (1)).toEqual({"unJust": 1});
});

