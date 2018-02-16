const { Left, Right, either, times, len } = require ("../index");

test("either length (*2) Left (\"foo\")", () => {
    expect(either (len) (times (2)) (Left ("foo"))).toBe(3);
});

test("either length (*2) Right (3)", () => {
    expect(either (len) (times (2)) (Right (3))).toBe(6);
});

