import { validateEmail } from './emailValidation';
import { sort_by } from './sortHelper';
import {
  retrieveStoredUser,
  setCurrentUser,
  removeStoredUser,
} from './localStorageHelper';
import { formatDate } from './dateFormatter';

describe('Helpers: email validation', () => {
  it('should return true if email is the valid format', () => {
    expect(validateEmail('test@test.com')).toBe(true);
  });

  it('should return false if email is not in the valid format', () => {
    expect(validateEmail('test@.com')).toBe(false);
  });
});

describe('Helpers: sort function', () => {
  it('should sort an array based on the specified property', () => {
    const testCollection = [
      { a: 9102, b: 'mocassin', c: 'carrots' },
      { a: 1234, b: 'light blue', c: 'apple' },
      { a: 5678, b: 'hunter green', c: 'bananas' },
    ];

    const expectedSortA = [
      { a: 1234, b: 'light blue', c: 'apple' },
      { a: 5678, b: 'hunter green', c: 'bananas' },
      { a: 9102, b: 'mocassin', c: 'carrots' },
    ];

    const expectedSortB = [
      { a: 5678, b: 'hunter green', c: 'bananas' },
      { a: 1234, b: 'light blue', c: 'apple' },
      { a: 9102, b: 'mocassin', c: 'carrots' },
    ];

    expect(testCollection.sort(sort_by('a'))).toEqual(expectedSortA);
    expect(testCollection.sort(sort_by('b'))).toEqual(expectedSortB);
    expect(testCollection.sort(sort_by('c'))).toEqual(expectedSortA);
  });
});

describe('Helpers: LocalStorage', () => {
  const KEY = 'userDetails';
  const VALUE = 'tom@tom.com';

  beforeEach(() => {
    localStorage.clear();
  });

  it('should save user email to local storage', () => {
    setCurrentUser(KEY, VALUE);

    expect(localStorage.__STORE__[KEY]).toBe(JSON.stringify(VALUE));
    expect(localStorage.setItem).toHaveBeenCalledWith(
      KEY,
      JSON.stringify(VALUE)
    );
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
  });

  it('should retrieve stored user from local storage', () => {
    setCurrentUser(KEY, VALUE);
    expect(retrieveStoredUser(KEY)).toEqual(VALUE);
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
  });

  it('should remove a stored user', () => {
    setCurrentUser(KEY, VALUE);
    expect(localStorage.__STORE__[KEY]).toBe(JSON.stringify(VALUE));

    removeStoredUser(KEY);
    expect(localStorage.__STORE__[KEY]).toBe(undefined);
    expect(Object.keys(localStorage.__STORE__).length).toBe(0);
  });
});

describe('Helpers: Date Formatter', () => {
  it('should format a date to the default "dd/mm/yy"', () => {
    expect(formatDate('2018-02-06T09:43:01.399108')).toBe('02/06/18');
  });

  it('should format a date to a non default date', () => {
    expect(formatDate('2018-02-06T09:43:01.399108', 'MM/DD/YYYY')).toBe(
      '02/06/2018'
    );
  });
});
