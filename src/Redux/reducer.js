const initialValue = {
  data: [],
};
export const reducer = (state = initialValue, action) => {
  let newdata;
  switch (action.type) {
    case "SET_PRODUCT_LIST":
      if (initialValue.data.length === 0) {
        initialValue.data = action.data;
      }

      return initialValue.data;

    case "DELETE_SAGA":
      newdata = [...state];
      newdata = newdata.filter((item) => item.id !== action.payload);
      return newdata;

    case "EDIT_DATA":
      newdata = [...state];
      newdata = newdata.map((item) => {
        if (item.id == action.payload.id.id) {
          item.title = action.payload.title;
          item.body = action.payload.body;
          return item;
        } else {
          return item;
        }
      });
      return newdata;
    case "ADD_DATA":
      newdata = [...state];
      const data = {
        id: newdata.length + 1,
        title: action.payload.title,
        body: action.payload.body,
      };
      initialValue.data.push(data);
      console.log(newdata, "ADDDATA");
      return newdata;
    default:
      return state;
  }
};
export default reducer;
