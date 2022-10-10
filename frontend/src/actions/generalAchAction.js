import axios from "axios"
import {
    CLEAR_ERRORS,
    GENERALACH_SETUP,
    GENERALACH_SETUP_FAIL,
    GENERALACH_SETUP_SUCCESS,
    LOAD_GENERALACH_FAIL,
    LOAD_GENERALACH_REQUEST,
    LOAD_GENERALACH_SUCCESS,
} from "../constants/libraryConstants";


export const createGeneralAch = (generalAchData) => async (dispatch) => {
    try {
        dispatch({ type: GENERALACH_SETUP });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.post("/api/v1/library/achievement-setup/GeneralAch", generalAchData, config);

        dispatch({
            type: GENERALACH_SETUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GENERALACH_SETUP_FAIL,
            payload: error.response.data.message,
        });
    }
}


export const updateGeneralAch  = (year, month,generalAch Data) => async (dispatch) => {
    try {
        dispatch({ type: GENERALACH_SETUP });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.put(`/api/v1/library/achievement-setup/GeneralAch/${year}/${month}`
            , generalAchData,
            config);

        dispatch({
            type: GENERALACH_SETUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GENERALACH_SETUP_FAIL,
            payload: error.response.data.message,
        });
    }
}

// load Finance
export const getGeneralAch = (year, month) => async (dispatch) => {
    try {

        dispatch({ type: LOAD_GENERALACH_REQUEST });

        const { data } = await axios.get(`/api/v1/library/achievement-setup/GeneralAch/${year}/${month}`);

        dispatch({
            type: LOAD_GENERALACH_SUCCESS,
            payload: data.generalAch,
        });

    } catch (error) {
        dispatch({
            type: LOAD_GENERALACH_FAIL,
        });
    }
};

// Clear All Errors
export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}