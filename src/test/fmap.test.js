const { Nothing, Just, Left, Right } = require ("../prelude");
const { fmap } = require ("../control.monad");

const double = x => 2 * x;

test("fmap for every item in array", () => {
    expect(fmap (double) ([1,2,3,4])).toEqual([2,4,6,8]);
});

test("fmap for every item in singleton array", () => {
    expect(fmap (double) ([1])).toEqual([2]);
});

test("fmap for empty array [] to equal []", () => {
    expect(fmap (double) ([])).toEqual([]);
});

test("fmap Just (1)", () => {
    expect(fmap (double) (Just (1))).toEqual(Just (2));
});

test("fmap Nothing", () => {
    expect(fmap (double) (Nothing)).toEqual(Nothing);
});

test("fmap Right (1)", () => {
    expect(fmap (double) (Right (1))).toEqual(Right (2));
});

test("fmap Left (\"Error\")", () => {
    expect(fmap (double) (Left ("Error"))).toEqual(Left ("Error"));
});

