export const retrieveStoredUser = key => JSON.parse(localStorage.getItem(key));

export const setCurrentUser = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const removeStoredUser = key => localStorage.removeItem(key);
