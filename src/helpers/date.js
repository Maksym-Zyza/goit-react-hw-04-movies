export const today = new Date().toISOString().slice(0, 10);

const date = new Date();
date.setMonth(date.getMonth() - 2);
export const twoMonthsAgo = date.toISOString().slice(0, 10);
