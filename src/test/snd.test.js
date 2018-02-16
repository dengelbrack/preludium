const { snd } = require ("../index");

test("first item of pair [1,2] is 2", () => {
    expect(snd ([1,2])).toBe(2);
});

