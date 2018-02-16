const { Maybe, Nothing, Just, Either, Left, Right } = require ("../index");
const { type } = require ("../control.monad");

test("type Array", () => {
    expect(type ([1])).toEqual(Array);
});

test("type Number", () => {
    expect(type (1)).toEqual(Number);
});

test("type String", () => {
    expect(type ("1")).toEqual(String);
});

test("type Boolean", () => {
    expect(type (true)).toEqual(Boolean);
});

test("type Object", () => {
    expect(type ({"a":1})).toEqual(Object);
});

test("type Nothing", () => {
    expect(type (Nothing)).toEqual(Maybe);
});

test("type Just (1)", () => {
    expect(type (Just (1))).toEqual(Maybe);
});

test("type Left (\"Error\")", () => {
    expect(type (Left ("Error"))).toEqual(Either);
});

test("type Right (1)", () => {
    expect(type (Right (1))).toEqual(Either);
});

