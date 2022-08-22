import axios from "axios"
import {
    CLEAR_ERRORS,
    COLLECTIONS_SETUP_SUCCESS,
    COLLECTIONS_SETUP_FAIL,
    COLLECTIONS_SETUP,
} from "../constants/libraryConstants";


export const createCollections = (collectionsData) => async (dispatch) => {
    try {
        dispatch({ type: COLLECTIONS_SETUP });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.post("/api/v1/library/librarySetup/collections", collectionsData, config);

        dispatch({
            type: COLLECTIONS_SETUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: COLLECTIONS_SETUP_FAIL,
            payload: error.response.data.message,
        });
    }
}

// Clear All Errors
export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}