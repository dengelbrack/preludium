const { Maybe, Just, Either, Right } = require ("../index");
const { pure, compM2 } = require ("../control.monad");

test("compM2 pure pure (Array)", () => {
    expect(compM2 (pure (Array)) (pure (Array)) (1)).toEqual([1]);
});

test("compM2 pure pure (Maybe)", () => {
    expect(compM2 (pure (Maybe)) (pure (Maybe)) (1)).toEqual(Just (1));
});

test("compM2 pure pure (Either)", () => {
    expect(compM2 (pure (Either)) (pure (Either)) (1)).toEqual(Right (1));
});

