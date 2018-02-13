const { Nothing, Just, Left, Right, liftM2 } = require ("../preludium");

const add = x => y => x + y;

test("liftM2 add [] []", () => {
    expect(liftM2 (add) ([]) ([])).toEqual([]);
});

test("liftM2 add [1,2,3] []", () => {
    expect(liftM2 (add) ([1,2,3]) ([])).toEqual([]);
});

test("liftM2 add [] [2,4,6]", () => {
    expect(liftM2 (add) ([]) ([2,4,6])).toEqual([]);
});

test("liftM2 add [1,2,3] [2,4,6]", () => {
    expect(liftM2 (add) ([1,2,3]) ([2,4,6])).toEqual([3,5,7,4,6,8,5,7,9]);
});

test("liftM2 add [1] [2]", () => {
    expect(liftM2 (add) ([1]) ([2])).toEqual([3]);
});

test("liftM2 add Nothing Nothing", () => {
    expect(liftM2 (add) (Nothing) (Nothing)).toEqual(Nothing);
});

test("liftM2 add Nothing Just (1)", () => {
    expect(liftM2 (add) (Nothing) (Just (1))).toEqual(Nothing);
});

test("liftM2 add Just (1) Nothing", () => {
    expect(liftM2 (add) (Just (1)) (Nothing)).toEqual(Nothing);
});

test("liftM2 add Just (1) Just (1)", () => {
    expect(liftM2 (add) (Just (1)) (Just (1))).toEqual(Just (2));
});

test("liftM2 add Left (\"Error\") Left (\"Error\")", () => {
    expect(liftM2 (add) (Left ("Error")) (Left ("Error"))).toEqual(Left ("Error"));
});

test("liftM2 add Right (1) Left (\"Error\")", () => {
    expect(liftM2 (add) (Right (1)) (Left ("Error"))).toEqual(Left ("Error"));
});

test("liftM2 add Left (\"Error\") Right (1)", () => {
    expect(liftM2 (add) (Left ("Error")) (Right (1))).toEqual(Left ("Error"));
});

test("liftM2 add Right (1) Right (1)", () => {
    expect(liftM2 (add) (Right (1)) (Right (1))).toEqual(Right (2));
});

