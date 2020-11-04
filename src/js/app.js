function orderByProps(inObj, order) {
  const arr = [];
  const defaultArr = [];

  for (const key in inObj) {
    const object = {};
    object.key = key;
    object.value = inObj[key];
    arr.push(object);
  }

  arr.sort((a, b) => {
    const keyA = a.key.toLowerCase();
    const keyB = b.key.toLowerCase();
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
  });

  for (let i = 0; i < order.length; i++) {
    const keyFind = arr.find((item) => item.key === order[i]);
    const keyIndex = arr.findIndex((item) => item.key === order[i]);
    arr.splice(keyIndex, 1);
    defaultArr.push(keyFind);
  }

  const finishArr = defaultArr.concat(arr);
  return finishArr;
}

const showAttacks = ({ special }) => special.map((item) => {
  const {
    id, name, icon, description = 'Описание недоступно',
  } = item;
  return {
    id, name, icon, description,
  };
});

export { orderByProps, showAttacks };
