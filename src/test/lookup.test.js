const { Nothing, Just, lookup } = require ("../index");

const object = {"prop": "value"};

test("lookup existing property in object", () => {
    expect(lookup ("prop") (object)).toEqual(Just ("value"));
});

test("lookup non existing property in object", () => {
    expect(lookup ("nope") (object)).toEqual(Nothing);
});

