/* 파라미터 받아오기 */

function getProducts(searchQuery) {
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/definitiomea/hnm-react-router-practice/products/?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        dispatch({type: "GET_PRODUCT_SUCCESS", payload: data});
    }
}

export const productAction={getProducts}