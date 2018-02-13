const { Maybe, Just, Either, Right, pure } = require ("../preludium");

test("pure Array", () => {
    expect(pure (Array) (1)).toEqual([1]);
});

test("pure nested Array", () => {
    expect(pure (Array) ([1])).toEqual([[1]]);
});

test("pure Maybe", () => {
    expect(pure (Maybe) (1)).toEqual(Just (1));
});

test("pure Either", () => {
    expect(pure (Either) (1)).toEqual(Right (1));
});

