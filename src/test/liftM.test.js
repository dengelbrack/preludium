const { Nothing, Just, Left, Right } = require ("../index");
const { liftM } = require ("../control.monad");

const double = x => 2 * x;

test("liftM double for every item in array", () => {
    expect(liftM (double) ([1,2,3,4])).toEqual([2,4,6,8]);
});

test("liftM double for every item in singleton array", () => {
    expect(liftM (double) ([1])).toEqual([2]);
});

test("liftM double for empty array [] to equal []", () => {
    expect(liftM (double) ([])).toEqual([]);
});

test("liftM double Just (1)", () => {
    expect(liftM (double) (Just (1))).toEqual(Just (2));
});

test("liftM double Nothing", () => {
    expect(liftM (double) (Nothing)).toEqual(Nothing);
});

test("liftM double Right (1)", () => {
    expect(liftM (double) (Right (1))).toEqual(Right (2));
});

test("liftM double Left (\"Error\")", () => {
    expect(liftM (double) (Left ("Error"))).toEqual(Left ("Error"));
});

