const { Maybe, Just, Either, Right, pure, compM3 } = require ("../preludium");

test("compM3 pure pure pure (Array)", () => {
    expect(compM3 (pure (Array)) (pure (Array)) (pure (Array)) (1)).toEqual([1]);
});

test("compM3 pure pure pure (Maybe)", () => {
    expect(compM3 (pure (Maybe)) (pure (Either)) (pure (Maybe)) (1)).toEqual(Just (1));
});

test("compM3 pure pure pure (Either)", () => {
    expect(compM3 (pure (Either)) (pure (Either)) (pure (Either)) (1)).toEqual(Right (1));
});

