// utils/dateRanges.js
export function startOfDay(d) {
  const date = new Date(d);
  date.setHours(0, 0, 0, 0);
  return date;
}
export function endOfDay(d) {
  const date = new Date(d);
  date.setHours(23, 59, 59, 999);
  return date;
}

export function todayRange() {
  const today = new Date();
  return [startOfDay(today), endOfDay(today)];
}

export function next7DaysRange() {
  const today = startOfDay(new Date());
  const plus7 = new Date(today);
  plus7.setDate(today.getDate() + 7);
  return [today, endOfDay(plus7)];
}
