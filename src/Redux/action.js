export const productlist = () => ({
  type: "PRODUCT_LIST",
});

export const deleteData = (id) => ({
  type: "DELETE_DATA",
  payload: id,
});

export const deleteSaga = (state) => ({
  type: "DELETE_SAGA",
  payload: state,
});
export const Editdata = (state) => {
  console.log("acton ", state);
  return {
    type: "EDIT_DATA",
    payload: state,
  };
};

export const ADDDATA = (state) => {
  console.log(state, "ADD,state");
  return {
    type: "ADD_DATA",
    payload: state,
  };
};
