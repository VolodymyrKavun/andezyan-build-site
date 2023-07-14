export const getProductByCategory = (category, data) => {
  return data.filter(product => product.category === category);
};
