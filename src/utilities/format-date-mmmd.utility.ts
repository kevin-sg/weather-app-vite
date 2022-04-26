const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

export function FormatDateMMMD(dateString: string): string {
  // Valided date
  if (!dateString) return 'Not date';
  const splitDate = dateString.split('-');
  const yy = splitDate[0];
  const mm = splitDate[1][0] === '0' ? splitDate[1][1] : splitDate[1];
  const dd = splitDate[2][0] === '0' ? splitDate[2][1] : splitDate[2];
  const cleanDate = [yy, mm, dd].join('-');

  // Formart date
  const getDT = new Date(cleanDate);
  const getDD = String(getDT.toLocaleString('en-us', { day: 'numeric' }));
  const getMM = String(months[getDT.getMonth()]).toLocaleLowerCase();
  const getWD = String(getDT.toLocaleString('en-us', { weekday: 'short' }));

  // Fri, 5 Jun
  return `${getWD}, ${getDD} ${getMM}`;
}
