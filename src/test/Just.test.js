const { Just } = require ("../index");

test("Just (1)", () => {
    expect(Just (1)).toEqual({"unJust": 1});
});

