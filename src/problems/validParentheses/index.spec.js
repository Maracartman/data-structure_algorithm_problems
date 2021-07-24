const isValid = require('.')

test('returns true with "()[]{}"', () => {
    expect(isValid("()[]{}")).toBe(true);
})


test('returns false with "(("', () => {
    expect(isValid("((")).toBe(false);
})