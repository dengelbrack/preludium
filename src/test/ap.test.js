const { Nothing, Just, Left, Right } = require ("../prelude");
const { ap } = require ("../control.monad");

const double = x => 2 * x;
const inc = x => 1 + x;

test("ap [] []", () => {
    expect(ap ([]) ([]) ).toEqual([]);
});

test("ap [double, inc] []", () => {
    expect(ap ([double, inc]) ([]) ).toEqual([]);
});

test("ap [] [1,2]", () => {
    expect(ap ([]) ([1,2]) ).toEqual([]);
});

test("ap [double, inc] [1,2]", () => {
    expect(ap ([double, inc]) ([1,2]) ).toEqual([2,4,2,3]);
});

test("ap Nothing Nothing", () => {
    expect(ap (Nothing) (Nothing)).toEqual(Nothing);
});

test("ap Just (inc) Nothing", () => {
    expect(ap (Just (inc)) (Nothing)).toEqual(Nothing);
});

test("ap Nothing Just (1)", () => {
    expect(ap (Nothing) (Just (1))).toEqual(Nothing);
});

test("ap Just (inc) Just (1)", () => {
    expect(ap (Just (inc)) (Just (1))).toEqual(Just (2));
});

test("ap Left (\"Error\") Left (\"Error\")", () => {
    expect(ap (Left ("Error")) (Left ("Error"))).toEqual(Left ("Error"));
});

test("ap Right (inc) Left (\"Error\")", () => {
    expect(ap (Right (inc)) (Left ("Error"))).toEqual(Left ("Error"));
});

test("ap Left (\"Error\") Right 1", () => {
    expect(ap (Left ("Error")) (Right (1))).toEqual(Left ("Error"));
});

test("ap Right (inc) Right (1)", () => {
    expect(ap (Right (inc)) (Right (1))).toEqual(Right (2));
});

