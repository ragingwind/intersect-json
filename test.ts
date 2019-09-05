import json from './src'

test('intersect props', () => {
  const src = {
    prop1: 'value1',
    prop2: 'value2'
  };

  const dest = {
    prop1: 'value1-1',
    prop3: 'value3'
  };

  const result = {
    prop1: 'value1-1',
    prop3: 'value3'
  };

  const res = json(src, dest);

  expect(res).toEqual(result);
});
