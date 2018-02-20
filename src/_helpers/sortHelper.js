export const sort_by = (field, reverse, primer) => {
  let key = primer
    ? function(x) {
        return primer(x[field]);
      }
    : function(x) {
        if (x[field]) return x[field];
        else {
          const fieldArray = field.split('.');
          return x[fieldArray[0]][fieldArray[1]];
        }
      };

  reverse = !reverse ? 1 : -1;

  return function(a, b) {
    //eslint-disable-next-line
    return (a = key(a)), (b = key(b)), reverse * ((a > b) - (b > a));
  };
};
