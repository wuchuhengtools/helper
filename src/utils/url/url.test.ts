import { obj2Query, query2Obj } from './index';

describe('obj2Query', () => {
  it('should convert a simple object to query string', () => {
    const obj = { a: 1, b: 2 };
    const result = obj2Query(obj);
    expect(result).toBe('?a=1&b=2');
  });

  it('should handle string values', () => {
    const obj = { name: 'John', city: 'New York' };
    const result = obj2Query(obj);
    expect(result).toBe('?name=John&city=New York');
  });

  it('should handle mixed value types', () => {
    const obj = { id: 123, name: 'Alice', active: true as any };
    const result = obj2Query(obj);
    expect(result).toBe('?id=123&name=Alice&active=true');
  });

  it('should skip empty string values', () => {
    const obj = { name: 'John', empty: '', age: 30 };
    const result = obj2Query(obj);
    expect(result).toBe('?name=John&age=30');
  });

  it('should handle empty object', () => {
    const obj = {};
    const result = obj2Query(obj);
    expect(result).toBe('');
  });

  it('should handle special characters in values', () => {
    const obj = { search: 'hello world', symbol: '@#$%' };
    const result = obj2Query(obj);
    expect(result).toBe('?search=hello world&symbol=@#$%');
  });

  it('should handle unicode characters', () => {
    const obj = { greeting: 'こんにちは', emoji: '🌍' };
    const result = obj2Query(obj);
    expect(result).toBe('?greeting=こんにちは&emoji=🌍');
  });

  it('should handle nested objects by converting them to strings', () => {
    const obj = { user: { name: 'John', age: 30 } as any };
    const result = obj2Query(obj);
    expect(result).toBe('?user=[object Object]');
  });

  it('should handle boolean values', () => {
    const obj = { active: true as any, disabled: false as any };
    const result = obj2Query(obj);
    expect(result).toBe('?active=true&disabled=false');
  });

  it('should handle null values', () => {
    const obj = { name: 'John', nullable: null as any };
    const result = obj2Query(obj);
    expect(result).toBe('?name=John&nullable=null');
  });
});

describe('query2Obj', () => {
  it('should convert a simple query string to object', () => {
    const query = '?a=1&b=2';
    const result = query2Obj(query);
    expect(result).toEqual({ a: '1', b: '2' });
  });

  it('should handle query string without question mark', () => {
    const query = 'a=1&b=2';
    const result = query2Obj(query);
    expect(result).toEqual({ a: '1', b: '2' });
  });

  it('should handle empty query string', () => {
    const query = '';
    const result = query2Obj(query);
    expect(result).toEqual({});
  });

  it('should handle query string with undefined values', () => {
    const query = '?a=1&b=undefined&c=3';
    const result = query2Obj(query);
    expect(result).toEqual({ a: '1', c: '3' });
  });

  it('should decode URI components', () => {
    const query = '?name=John%20Doe&city=New%20York';
    const result = query2Obj(query);
    expect(result).toEqual({ name: 'John Doe', city: 'New York' });
  });

  it('should handle special characters in query string', () => {
    const query = '?search=hello%20world&symbol=%40%23%24%25';
    const result = query2Obj(query);
    expect(result).toEqual({ search: 'hello world', symbol: '@#$%' });
  });

  it('should handle unicode characters in query string', () => {
    const query = '?greeting=%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF&emoji=%F0%9F%8C%8D';
    const result = query2Obj(query);
    expect(result).toEqual({ greeting: 'こんにちは', emoji: '🌍' });
  });

  it('should handle single parameter query string', () => {
    const query = '?name=John';
    const result = query2Obj(query);
    expect(result).toEqual({ name: 'John' });
  });

  it('should handle query string with empty values', () => {
    const query = '?name=John&empty=&age=30';
    const result = query2Obj(query);
    expect(result).toEqual({ name: 'John', age: '30' });
  });

  it('should handle complex query string with various data types', () => {
    const query = '?search=react&page=2&filters=latest,popular&sort=desc&active=true';
    const result = query2Obj(query);
    expect(result).toEqual({
      search: 'react',
      page: '2',
      filters: 'latest,popular',
      sort: 'desc',
      active: 'true'
    });
  });
});

describe('Integration Tests', () => {
  it('should maintain data integrity in round trip conversion', () => {
    const originalObj = {
      name: 'John',
      age: 30,
      city: 'New York',
      active: true as any,
      search: 'typescript tutorial'
    };
    
    const query = obj2Query(originalObj);
    const resultObj = query2Obj(query);
    
    // Convert numbers and booleans to strings for comparison
    const expectedObj = {
      name: 'John',
      age: '30',
      city: 'New York',
      active: 'true',
      search: 'typescript tutorial'
    };
    
    expect(resultObj).toEqual(expectedObj);
  });

  it('should handle edge cases in round trip conversion', () => {
    const testCases = [
      { input: {}, expected: {} },
      { input: { empty: '' }, expected: {} },
      { input: { special: '@#$%' }, expected: { special: '@#$%' } },
      { input: { unicode: '🌍' }, expected: { unicode: '🌍' } }
    ];

    testCases.forEach(({ input, expected }) => {
      const query = obj2Query(input as any);
      const result = query2Obj(query);
      expect(result).toEqual(expected);
    });
  });

  it('should handle complex nested scenarios', () => {
    const complexObj = {
      search: 'react hooks',
      filters: ['latest', 'popular'] as any[],
      pagination: {
        page: 1,
        limit: 10
      } as any,
      sort: 'desc',
      active: true as any
    };

    const query = obj2Query(complexObj);
    const result = query2Obj(query);

    // The nested object gets converted to string representation
    expect(result).toEqual({
      search: 'react hooks',
      filters: 'latest,popular',
      pagination: '[object Object]',
      sort: 'desc',
      active: 'true'
    });
  });
});