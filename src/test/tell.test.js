const { tell, writer, execWriter } = require ("../control.monad.writer");

test("tell [\"one\"]", () => {
    expect(tell (["one"])).toEqual(writer (null, ["one"]));
});

test("tell [\"comment\"]", () => {
    const logs = execWriter (
        writer (1, ["one"]) .bind (x =>
            tell (["comment"]) .then (
                writer (x+1, ["two"]))
        ));
    expect(logs).toEqual(["one", "comment", "two"]);
});

