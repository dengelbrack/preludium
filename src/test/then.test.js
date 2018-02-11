const { Nothing, Just, Left, Right } = require ("../preludium");
const { then } = require ("../control.monad");

test("then for every item in array", () => {
    expect(then ([1,2,3]) ([2,4]) ).toEqual([2,4,2,4,2,4]);
});

test("then for every item in singleton array", () => {
    expect(then ([1]) ([2])).toEqual([2]);
});

test("then for empty array [] to equal []", () => {
    expect(then ([]) ([])).toEqual([]);
});

test("Just (1) then Just (2)", () => {
    expect(then (Just (1)) (Just (2))).toEqual(Just (2));
});

test("Nothing then Nothing", () => {
    expect(then (Nothing) (Nothing)).toEqual(Nothing);
});

test("Nothing then Just (2)", () => {
    expect(then (Nothing) (Just (2))).toEqual(Nothing);
});

test("Just (1) then Nothing", () => {
    expect(then (Just (1)) (Nothing)).toEqual(Nothing);
});

test("Right (1) then Right (2)", () => {
    expect(then (Right (1)) (Right (2))).toEqual(Right (2));
});

test("Left (\"Error\") then Left (\"Mistake\")", () => {
    expect(then (Left ("Error")) (Left ("Mistake"))).toEqual(Left ("Error"));
});

test("Left (\"Error\") then Right (2)", () => {
    expect(then (Left ("Error")) (Right (2))).toEqual(Left ("Error"));
});

test("Right (1) then Left (\"Error\")", () => {
    expect(then (Right (1)) (Left ("Error"))).toEqual(Left ("Error"));
});

