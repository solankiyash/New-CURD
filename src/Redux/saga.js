import { put, takeEvery } from "redux-saga/effects";
import { deleteSaga } from "./action";
import axios from "axios";
function* getProduct() {
  let data;
  yield axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    console.log(res.data, "rendered data");
    data = res.data;
  });
  //   console.log("action is called ", data);
  yield put({ type: "SET_PRODUCT_LIST", data: data });
}

export function* onDeleteTodosaga({ payload: { id } }) {
  yield put(deleteSaga(id));
}
// export function* onAddTodosaga({ payload }) {
//   yield put(Editdata(payload));
// }
function* saga() {
  yield takeEvery("PRODUCT_LIST", getProduct);
  yield takeEvery("DELETE_DATA", onDeleteTodosaga);
}
export default saga;
