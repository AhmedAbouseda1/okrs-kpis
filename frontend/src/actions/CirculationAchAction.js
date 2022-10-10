import axios from "axios"
import {
    CLEAR_ERRORS,
    CIRCULATIONACH_SETUP,
    CIRCULATIONACH_SETUP_FAIL,
    CIRCULATIONACH_SETUP_SUCCESS,
    LOAD_CIRCULATIONACH_FAIL,
    LOAD_CIRCULATIONACH_REQUEST,
    LOAD_CIRCULATIONACH_SUCCESS,
} from "../constants/libraryConstants";


export const createCirculationAch = (circulationAchData) => async (dispatch) => {
    try {
        dispatch({ type: CIRCULATIONACH_SETUP });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.post("/api/v1/library/achievement-setup/CirculationAch", circulationAchData, config);

        dispatch({
            type: CIRCULATIONACH_SETUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CIRCULATIONACH_SETUP_FAIL,
            payload: error.response.data.message,
        });
    }
}


export const updateCirculationAch  = (year, month,circulationAch Data) => async (dispatch) => {
    try {
        dispatch({ type: CIRCULATIONACH_SETUP });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.put(`/api/v1/library/achievement-setup/CirculationAch/${year}/${month}`
            , circulationAchData,
            config);

        dispatch({
            type: CIRCULATIONACH_SETUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CIRCULATIONACH_SETUP_FAIL,
            payload: error.response.data.message,
        });
    }
}

// load Finance
export const getCirculationAch = (year, month) => async (dispatch) => {
    try {

        dispatch({ type: LOAD_CIRCULATIONACH_REQUEST });

        const { data } = await axios.get(`/api/v1/library/achievement-setup/CirculationAch/${year}/${month}`);

        dispatch({
            type: LOAD_CIRCULATIONACH_SUCCESS,
            payload: data.circulationAch,
        });

    } catch (error) {
        dispatch({
            type: LOAD_CIRCULATIONACH_FAIL,
        });
    }
};

// Clear All Errors
export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}