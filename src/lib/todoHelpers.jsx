export const addTodo = ({list, item}) => {
  return list.concat(item);
};

export const generateId = () => {
  return Math.floor(Math.random()*100000);
};

export const findById = ({id, list}) => {
  return list.find(item => item.id === id);
};

export const toggleTodo = (todoItem) => {
  return ({
    ...todoItem,
    isComplete: !todoItem.isComplete
  });
};

export const updateTodo = ({item, list}) => {
  const updatedIndex = list.findIndex(currentItem => currentItem.id === item.id);
  return [
    ...list.slice(0, updatedIndex),
    item,
    ...list.slice(updatedIndex+1)
  ];
};
