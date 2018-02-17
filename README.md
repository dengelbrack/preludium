# preludium
Functional programming library for JavaScript. Inspired by Haskell.

## Create your own types
This is how Maybe is defined in preludium. Your own types can be created in a similar fashion.
```javascript
// Import a helper function, that can create value constructors
const { ValueConstructor } = require ("preludium/meta.util");

// data Maybe a = Nothing | Just a
const Maybe = function () {};
//    Nothing :: Maybe a
const Nothing = ValueConstructor (Maybe) (function Nothing () {});
//    Just :: a -> Maybe a
const Just = ValueConstructor (Maybe) (function Just (x) { this.unJust = x; });

//    isNothing :: Maybe a -> Boolean
const isNothing = m => m.valueconstructor.name === "Nothing";
//    isJust :: Maybe a -> Boolean
const isJust = m => m.valueconstructor.name === "Just";

```
Making Maybe an instance of Functor:
```javascript
//    fmap :: (a -> b) -> f a -> f b
const fmap = f => m => m.fmap (f);

Nothing.prototype.fmap = function (_) {
    return Nothing;
};
Just.prototype.fmap = function (f) {
    return Just (f (this.unJust));
};
```
Using fmap for Maybe:
```javascript
print (fmap (x => 2 * x) (Just (21)));  // Just (42)
```

## Example usage
Real documentation will follow. For the moment here are some examples.
```javascript
const { print, Just, Nothing } = require ("preludium");

const safeDivision = x => y => {
    if (y === 0) return Nothing;
    else return Just (x / y);
};

const value = safeDivision (84) (4);
const noValue = safeDivision (10) (0);

print (value);      // Just (21)
print (noValue);    // Nothing
```

The liftM2 function takes a normal function, such as plus, and "lifts" it to work on Monads.
```javascript
const { plus, liftM2 } = require ("preludium");

//    plus ::               Number ->   Number ->   Number
//    plusM :: Monad m => m Number -> m Number -> m Number
const plusM = liftM2 (plus);

print (plusM (value) (value));      // Just (42)
print (plusM (value) (noValue));    // Nothing
```

The function plusM works on all Monads, not just Maybe:
```javascript
print (plusM ([1,2,3]) ([10,100])); // [11, 101, 12, 102, 13, 103]
```

