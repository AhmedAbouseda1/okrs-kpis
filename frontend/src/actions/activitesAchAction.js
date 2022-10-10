import axios from "axios"
import {
    CLEAR_ERRORS,
    ACTIVITESACH_SETUP,
    ACTIVITESACH_SETUP_FAIL,
    ACTIVITESACH_SETUP_SUCCESS,
    LOAD_ACTIVITESACH_FAIL,
    LOAD_ACTIVITESACH_REQUEST,
    LOAD_ACTIVITESACH_SUCCESS,
} from "../constants/libraryConstants";


export const createActivitesAch = (activitesAchData) => async (dispatch) => {
    try {
        dispatch({ type: ACTIVITESACH_SETUP });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.post("/api/v1/library/achievement-setup/ActivitesAch", activitesAchData, config);

        dispatch({
            type: ACTIVITESACH_SETUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ACTIVITESACH_SETUP_FAIL,
            payload: error.response.data.message,
        });
    }
}


export const updateActivitesAch  = (year, month, activitesAchData) => async (dispatch) => {
    try {
        dispatch({ type: ACTIVITESACH_SETUP });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.put(`/api/v1/library/achievement-setup/ActivitesAch/${year}/${month}`
            , activitesAchData,
            config);

        dispatch({
            type: ACTIVITESACH_SETUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ACTIVITESACH_SETUP_FAIL,
            payload: error.response.data.message,
        });
    }
}

// load Finance
export const getActivitesAch = (year, month) => async (dispatch) => {
    try {

        dispatch({ type: LOAD_ACTIVITESACH_REQUEST });

        const { data } = await axios.get(`/api/v1/library/achievement-setup/ActivitesAch/${year}/${month}`);

        dispatch({
            type: LOAD_ACTIVITESACH_SUCCESS,
            payload: data.activitesAch,
        });

    } catch (error) {
        dispatch({
            type: LOAD_ACTIVITESACH_FAIL,
        });
    }
};

// Clear All Errors
export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}