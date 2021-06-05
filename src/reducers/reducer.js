// Custom imports
import {PRODUCT_DETAIL} from "../actions/action";

// Setting initial variables
const iniState = {
    productDetail: {}
};

const Reducer = (state = iniState, action) => {
    if (action.type === PRODUCT_DETAIL) {
        return {...state, productDetail: action.productDetail}
    }
};

// Default Export
export default Reducer;