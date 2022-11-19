import { ERROR_FETCHING_PRODUCT, START_FETCHING_PRODUCT, SUCCESS_FETCHING_PRODUCT } from "./constants";

const statusList = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  data: [],
  currentPage: 1,
  totalItems: -1,
  perPage: 8,
  keyword: "",
  category: "",
  tags: [],
  status: statusList.idle,
};

export default function productReducer(state = initialState, { type, payload }) 
{
  switch (type) {
    case START_FETCHING_PRODUCT:
      return { ...state, status: statusList.process };

    case ERROR_FETCHING_PRODUCT:
      return { ...state, status: statusList.error };

    case SUCCESS_FETCHING_PRODUCT:
      return { ...state, status: statusList.success, data: payload.data, totalItems: payload };
      
    default:
      return state
  }
}
