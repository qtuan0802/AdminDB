import axios from "axios";
import { put, takeLatest, call } from "redux-saga/effects";
import { productType } from "../type";

function* getProducts(action) {
  const { callback, data } = action?.payload;
  const { token } = data;
  try {
    const response = yield call(() =>
      // yeid call để call api with token
      axios.get("https://api.pexels.com/v1/search?query=nature&per_page=18", {
        headers: {
          Authorization: token,
        },
      })
    );
    // yeild put là đưa data call được vào get_proudct_success
    yield put({
      type: productType.GET_PRODUCTS_SUCCESS,
      payload: { data: response?.data },
    });
    // callback là để truyền data ra ngoài view khi lấy data thành công mới truyền ra ngoài
    callback(response?.data);
  } catch (err) {
    // callback khi lấy data thất bại thì truyền data ra ngoài view
    callback(err);
  }
}
export default function* productSaga() {
  // lấy lần call api cuối cùng thành công của cái function getProducts
  yield takeLatest(productType.GET_PRODUCTS, getProducts);
}
