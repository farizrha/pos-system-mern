import { getProduct } from "../../api/product";
import { ERROR_FETCHING_PRODUCT, START_FETCHING_PRODUCT, SUCCESS_FETCHING_PRODUCT } from "./constants";
import debounce from "debounce-promise";

export const startFetchingProduct = () => ({
  type: START_FETCHING_PRODUCT,
});

export const errorFetchingProduct = () => ({
  type: ERROR_FETCHING_PRODUCT,
});

export const successFetchingProduct = (payload) => ({
  type: SUCCESS_FETCHING_PRODUCT,
  payload
});

let debouncedFetchProducts = debounce(getProduct, 1000);

export const loadProductAsync = () => (dispatch) => {
  dispatch(startFetchingProduct());

  debouncedFetchProducts()
    .then((response) => dispatch(successFetchingProduct(response.data)))
    .catch(() => dispatch(errorFetchingProduct()));

}
