export const DateConverter = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const hour = d.getHours();
  const minute = d.getMinutes();
  const second = d.getSeconds();

  return {
    dateOnly: `${day}/${month}/${year}`,
    timeOnly: `${hour}:${minute}:${second}`,
    fullDatetime: `${day}/${month}/${year} ${hour}:${minute}:${second}`,
    USDate: `${year}-${month}-${day}`,
    rawDate: d,
  };
};

export function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export const round = (num, precision) => Number(Math.round(num + 'e+' + precision) + 'e-' + precision);
