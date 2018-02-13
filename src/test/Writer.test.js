const { Writer } = require ("../writer");
const { eq, show, fmap, pure, ap, bind, then } = require ("../preludium");

const double = x => x * 2;

test("Writer 1 [\"one\"]", () => {
    expect(Writer (1) (["one"])).toEqual({"value": 1, "writing": ["one"]});
});

// this test exists because jest complains otherwise
test("Writer 1 [\"one\"]", () => {
    expect(Writer (1) (["one"]).constructor ()).toEqual(undefined);
});

test("fmap double (Writer 1 [])", () => {
    expect(fmap (double) (Writer (1) ([]))).toEqual(Writer (2) ([]));
});

test("pure Writer 1", () => {
    expect(pure (Writer) (1)).toEqual(Writer (1) ([""]));
});

test("ap (Writer double [\"double\"]) (Writer 1 [\"one\"])", () => {
    expect(ap (Writer (double) (["double"])) (Writer (1) (["one"]))).toEqual(Writer (2) (["double", "one"]));
});

test("bind (Writer 1 [\"one\"]) (Writer (double (x)) [\"double\"])", () => {
    expect(bind (Writer (1) (["one"])) (x => Writer (double (x)) (["double"]))).toEqual(Writer (2) (["one", "double"]));
});

test("then (Writer 1 [\"one\"]) (Writer 2 [\"two\"])", () => {
    expect(then (Writer (1) (["one"])) (Writer (2) (["two"]))).toEqual(Writer (2) (["one", "two"]));
});

test("eq (Writer 1 [\"foo\"]) (Writer 2 [\"foo\"])", () => {
    expect(eq (Writer (1) (["foo"])) (Writer (2) (["foo"]))).toBeFalsy();
});

test("eq (Writer 1 [\"one\"]) (Writer 1 [\"foo\"])", () => {
    expect(eq (Writer (1) (["one"])) (Writer (1) (["foo"]))).toBeFalsy();
});

test("eq (Writer 1 [\"one\"]) (Writer 1 [\"one\"])", () => {
    expect(eq (Writer (1) (["one"])) (Writer (1) (["one"]))).toBeTruthy();
});

test("show (Writer 1 [\"one\"])", () => {
    expect(show (Writer (1) (["one"]))).toBe("Writer { 1, [\"one\"] }");
});

