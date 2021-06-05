// Default imports
import axios from 'axios';

// CONSTANT ACTION
export const PRODUCT_DETAIL = 'PRODUCT_DETAIL';

// Function
function SetProductDetail(productDetail) {
    return {
        type: PRODUCT_DETAIL,
        productDetail: productDetail
    }
}

export function GetProductDetail() {
    return (dispatch) => {
        return axios
            .get('https://fe-assignment.vaimo.net/')
            .then(data => {
                dispatch(SetProductDetail(data.data));
            })
            .catch(error => console.log(error));
    }
}