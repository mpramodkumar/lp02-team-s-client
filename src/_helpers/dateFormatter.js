import moment from 'moment';

export const formatDate = (originalDate, formatType = 'MM/DD/YY') => {
  return moment(originalDate).format(formatType);
};
