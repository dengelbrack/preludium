const { ValueConstructor } = require ("../meta");

test("ValueConstructor arity 0", () => {
    const VC = ValueConstructor (function Type () {}) (function Constructor () {});
    const value = VC;
    expect(value.constructor.name).toBe("Type");
    expect(value.valueconstructor.name).toBe("Constructor");
});

test("ValueConstructor arity 1", () => {
    const VC = ValueConstructor (function Type () {}) (function Constructor (x) {
        this.x = x;
    });
    const value = VC (1);
    expect(value.constructor.name).toBe("Type");
    expect(value.valueconstructor.name).toBe("Constructor");
});

test("ValueConstructor arity 2", () => {
    const VC = ValueConstructor (function Type () {}) (function Constructor (x, y) {
        this.x = x;
        this.y = y;
    });
    const value = VC (1) (2);
    expect(value.constructor.name).toBe("Type");
    expect(value.valueconstructor.name).toBe("Constructor");
});

test("ValueConstructor arity 3", () => {
    const f = () => ValueConstructor (function Type () {}) (function Constructor (x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    });
    expect(f).toThrow(new Error ("Value constructors of arity > 2 are currently not supported."));
});

