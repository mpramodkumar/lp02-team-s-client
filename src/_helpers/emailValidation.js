export const validateEmail = mail => {
  const re = new RegExp(
    '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$'
  );

  if (re.test(mail)) {
    return true;
  }
  return false;
};
