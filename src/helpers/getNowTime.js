export const getTimeHhMm = date => {
  const now = new Date(date);
  return `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
  // {
  // now,
  // nowHours: now.getHours(),
  // nowMinutes: now.getMinutes(),
  // nowTime: `${this.nowHours}:${this.nowMinutes.toString().padStart(2, '0')}`,
  // };
};
