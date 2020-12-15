export const aooFactory = (snapshot: any[], amount: number) => {
  let array: any[] = [];
  for (let i = 0; i < amount; i++) {
    const newObj = snapshot.reduce((acc: any, cur: any) => {
      return { ...acc, [cur.key]: cur.fn(...cur.params) };
    }, {});
    array = [...array, newObj];
  }
  return array;
};