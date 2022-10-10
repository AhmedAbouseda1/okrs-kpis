import axios from "axios"
import {
    CLEAR_ERRORS,
    TRAININGACH_SETUP,
    TRAININGACH_SETUP_FAIL,
    TRAININGACH_SETUP_SUCCESS,
    LOAD_TRAININGACH_FAIL,
    LOAD_TRAININGACH_REQUEST,
    LOAD_TRAININGACH_SUCCESS,
} from "../constants/libraryConstants";

//TrainingAch
export const createTrainingAch = (TrainingAchData) => async (dispatch) => {
    try {
        dispatch({ type: TRAININGACH_SETUP });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.post("/api/v1/library/achievement-setup/TrainingAch", TrainingAchData, config);

        dispatch({
            type:TRAININGACH_SETUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: TRAININGACH_SETUP_FAIL,
            payload: error.response.data.message,
        });
    }
}


export const updateTrainingAch  = (year, month,TrainingAch Data) => async (dispatch) => {
    try {
        dispatch({ type: TRAININGACH_SETUP });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.put(`/api/v1/library/achievement-setup/TrainingAch/${year}/${month}`
            , TrainingAchData,
            config);

        dispatch({
            type:TRAININGACH_SETUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: TRAININGACH_SETUP_FAIL,
            payload: error.response.data.message,
        });
    }
}

// load Finance
export const getTrainingAch = (year, month) => async (dispatch) => {
    try {

        dispatch({ type: LOAD_TRAININGACH_REQUEST });

        const { data } = await axios.get(`/api/v1/library/achievement-setup/TrainingAch/${year}/${month}`);

        dispatch({
            type: LOAD_TRAININGACH_SUCCESS,
            payload: data.TrainingAch,
        });

    } catch (error) {
        dispatch({
            type: LOAD_TRAININGACH_FAIL,
        });
    }
};

// Clear All Errors
export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}