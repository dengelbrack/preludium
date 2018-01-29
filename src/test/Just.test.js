const { Just } = require ("../prelude");

test("Just (1)", () => {
    expect(Just (1)).toEqual({"unJust": 1});
});

