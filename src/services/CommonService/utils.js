export const getEmptyIngridient = () => {
  return {
    id: Math.random().toString(36).slice(2),
    title: "",
    measure: "",
  };
};
