const { Nothing, Just, Left, Right } = require ("../preludium");
const { liftM3 } = require ("../control.monad");

const add3 = x => y => z => x + y + z;

test("liftM3 add3 [] [] []", () => {
    expect(liftM3 (add3) ([]) ([]) ([])).toEqual([]);
});

test("liftM3 add3 [1,2,3] [2,4,6] []", () => {
    expect(liftM3 (add3) ([1,2,3]) ([2,4,6]) ([])).toEqual([]);
});

test("liftM3 add3 [1,2] [2,4] [3,4]", () => {
    expect(liftM3 (add3) ([1,2]) ([2,4]) ([3,4])).toEqual([6,7,8,9,7,8,9,10]);
});

test("liftM3 add3 [1] [2] [3]", () => {
    expect(liftM3 (add3) ([1]) ([2]) ([3])).toEqual([6]);
});

test("liftM3 add3 Just (1) Nothing Just (1)", () => {
    expect(liftM3 (add3) (Just (1)) (Nothing) (Just (1))).toEqual(Nothing);
});

test("liftM3 add3 Just (1) Just (1) Just (1)", () => {
    expect(liftM3 (add3) (Just (1)) (Just (1)) (Just (1))).toEqual(Just (3));
});

test("liftM3 add3 Right (1) Left (\"Error\") Right (1)", () => {
    expect(liftM3 (add3) (Right (1)) (Left ("Error")) (Right (1))).toEqual(Left ("Error"));
});

test("liftM3 add3 Right (1) Right (1) Right (1)", () => {
    expect(liftM3 (add3) (Right (1)) (Right (1)) (Right (1))).toEqual(Right (3));
});

