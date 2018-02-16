const { zip } = require ("../index");

test("zip of arrays [1,2,3] and ['a', 'b', 'c'] equals [[1,'a'],[2,'b'],[3,'c']]", () => {
    expect(zip ([1,2,3]) (["a", "b", "c"])).toEqual([[1,"a"],[2,"b"],[3,"c"]]);
});

test("zip of arrays [1,2,3] and [] equals []", () => {
    expect(zip ([1,2,3]) ([])).toEqual([]);
});

test("zip of arrays [] and ['a', 'b', 'c'] equals []", () => {
    expect(zip ([]) (["a", "b", "c"])).toEqual([]);
});

