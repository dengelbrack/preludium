const { eq, Nothing, Just, Left, Right } = require ("../index");

test("eq 1 1", () => {
    expect(eq (1) (1)).toBeTruthy();
});

test("eq 1 2", () => {
    expect(eq (1) (2)).toBeFalsy();
});

test("eq '1' '1'", () => {
    expect(eq ("1") ("1")).toBeTruthy();
});

test("eq '1' '2'", () => {
    expect(eq ("1") ("2")).toBeFalsy();
});

test("eq 1 '1'", () => {
    expect(eq (1) ("1")).toBeFalsy();
});

test("eq 1 [1]", () => {
    expect(eq (1) ([1])).toBeFalsy();
});

test("eq [1] [1]", () => {
    expect(eq ([1]) ([1])).toBeTruthy();
});

test("eq [1] [1,1]", () => {
    expect(eq ([1]) ([1,1])).toBeFalsy();
});

test("eq true false", () => {
    expect(eq (true) (false)).toBeFalsy();
});

test("eq true true", () => {
    expect(eq (true) (true)).toBeTruthy();
});

test("eq Nothing Nothing", () => {
    expect(eq (Nothing) (Nothing)).toBeTruthy();
});

test("eq Nothing Just (1)", () => {
    expect(eq (Nothing) (Just (1))).toBeFalsy();
});

test("eq Just (1) Nothing", () => {
    expect(eq (Just (1)) (Nothing)).toBeFalsy();
});

test("eq Just (1) Just (1)", () => {
    expect(eq (Just (1)) (Just (1))).toBeTruthy();
});

test("eq Just (Just (1)) Just (Just (1))", () => {
    expect(eq (Just (Just (1))) (Just (Just (1)))).toBeTruthy();
});

test("eq Left (\"Error\") Left (\"Error\")", () => {
    expect(eq (Left ("Error")) (Left ("Error"))).toBeTruthy();
});

test("eq Left (\"Error\") Right (1)", () => {
    expect(eq (Left ("Error")) (Right (1))).toBeFalsy();
});

test("eq Right (1) Left (\"Error\")", () => {
    expect(eq (Right (1)) (Left ("Error"))).toBeFalsy();
});

test("eq Right (1) Right (1)", () => {
    expect(eq (Right (1)) (Right (1))).toBeTruthy();
});

test("eq Right (Right (1)) Right (Right (1))", () => {
    expect(eq (Right (Right (1))) (Right (Right (1)))).toBeTruthy();
});

