export const addProduct = (product) => ({
  type: 'product/add',
  payload: product,
});

export const deleteProduct = (id) => ({
  type: 'product/delete',
  payload: id,
});

export const filterValue = (value) => ({
  type: 'filter/value',
  payload: value,
})