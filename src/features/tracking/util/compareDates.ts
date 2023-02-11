function compareDates(d1: Date, d2: Date) {
  let date1 = new Date(d1);
  let date2 = new Date(d2);
  return (
    date1.getUTCDay() === date2.getUTCDay() &&
    date1.getUTCMonth() === date2.getUTCMonth()
  );
}

export default compareDates;
