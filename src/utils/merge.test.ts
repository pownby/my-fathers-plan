import merge from "./merge";

test('empty objects', () => {
  expect(merge({}, {})).toEqual({});
});

test('null args', () => {
  expect(merge(null, null)).toEqual({});
});

test('exclusive props', () => {
  expect(merge({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
});

test('conflicting props', () => {
  expect(merge({ a: 2, b: 3 }, { a: 3, b: 4 })).toEqual({ a: 3, b: 4 });
});

test('nested exclusive objects', () => {
  expect(merge({ a: { b: 2 } }, { c: { d: 4 } })).toEqual({ a: { b: 2 }, c: { d: 4 } });
});

test('nested conflicting props', () => {
  expect(merge({ a: { b: 2 } }, { a: { d: 4 } })).toEqual({ a: { b: 2, d: 4 } });
});

test('nested conflicting objects', () => {
  expect(merge({ a: { b: 2 } }, { a: { b: 4 } })).toEqual({ a: { b: 4 } });
});

test('conflicting types', () => {
  expect(merge({ a: 3 }, { a: { b: 4 }})).toEqual({ a: { b: 4 }});
});

test('conflicting types reversed', () => {
  expect(merge({ a: { b: 4 }}, { a: 3 })).toEqual({ a: 3 });
});

test('arrays', () => {
  expect(merge({ a: [1, 2] }, { a: [3, 4] })).toEqual({ a: [1, 2, 3, 4] });
});

test('complex case', () => {
  expect(merge({ a: { b: { c: 3, d: 4 } } }, { a: { b: { c: 4 }, e: 6 } })).toEqual({ a: { b: { c: 4, d: 4 }, e: 6 } });
});