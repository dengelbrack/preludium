const { Nothing, Just, Left, Right } = require ("../prelude");
const { bind } = require ("../control.monad");

const double = x => 2 * x;

test("bind for every item in array", () => {
    expect(bind ([1,2,3,4]) (x => [double (x)]) ).toEqual([2,4,6,8]);
});

test("bind for every item in singleton array", () => {
    expect(bind ([1]) (x => [double (x)])).toEqual([2]);
});

test("bind for empty array [] to equal []", () => {
    expect(bind ([]) (x => [double (x)])).toEqual([]);
});

test("bind Just (1)", () => {
    expect(bind (Just (1)) (x => Just (double (x)))).toEqual(Just (2));
});

test("bind Nothing", () => {
    expect(bind (Nothing) (x => Just (double (x)))).toEqual(Nothing);
});

test("bind Right (1)", () => {
    expect(bind (Right (1)) (x => Right (double (x)))).toEqual(Right (2));
});

test("bind Left (\"Error\")", () => {
    expect(bind (Left ("Error")) (x => Right (double (x)))).toEqual(Left ("Error"));
});

