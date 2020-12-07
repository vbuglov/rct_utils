const addHours = (date: any, h: any) => {
  date.setHours(date.getHours() + h);
  return date;
};

export { addHours };