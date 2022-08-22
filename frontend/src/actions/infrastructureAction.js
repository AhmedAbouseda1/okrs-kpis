import axios from "axios"
import {
    CLEAR_ERRORS,
    INFRASTRUCTURE_SETUP,
    INFRASTRUCTURE_SETUP_FAIL,
    INFRASTRUCTURE_SETUP_SUCCESS,
} from "../constants/libraryConstants";


export const createInfrastructure = (infrastructureData) => async (dispatch) => {
    try {
        dispatch({ type: INFRASTRUCTURE_SETUP });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.post("/api/v1/library/librarySetup/infrastructure", infrastructureData, config);

        dispatch({
            type: INFRASTRUCTURE_SETUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: INFRASTRUCTURE_SETUP_FAIL,
            payload: error.response.data.message,
        });
    }
}

// Clear All Errors
export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}