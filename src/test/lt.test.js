const { lt } = require ("../preludium");

test("lt (2) (1) is true [sic]", () => {
    expect(lt (2) (1)).toBeTruthy();
});

test("lt (1) (2) is false [sic]", () => {
    expect(lt (1) (2)).toBeFalsy();
});

test("lt (1) (1) is false", () => {
    expect(lt (1) (1)).toBeFalsy();
});

