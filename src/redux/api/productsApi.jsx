import {
  getProdsStart,
  getProdsSuccess,
  getProdsFailure,
} from "../reducers/ProductReducer";

import { publicReq } from "../../reqMethods";

export const getProducts = async (dispatch) => {
  dispatch(getProdsStart());

  try {
    const res = await publicReq.get();
    dispatch(getProdsSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(getProdsFailure());
  }
};
