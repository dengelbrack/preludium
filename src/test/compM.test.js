const { Maybe, Just, Either, Right } = require ("../prelude");
const { pure, compM } = require ("../control.monad");

test("compM pure pure (Array)", () => {
    expect(compM (Array) (pure (Array), pure (Array)) (1)).toEqual([1]);
});

test("compM pure pure (Maybe)", () => {
    expect(compM (Maybe) (pure (Maybe), pure (Maybe)) (1)).toEqual(Just (1));
});

test("compM pure pure (Either)", () => {
    expect(compM (Either) (pure (Either), pure (Either)) (1)).toEqual(Right (1));
});

