import axios from "axios"
import {
    CLEAR_ERRORS,
    LOAD_PROCESSINGACH_FAIL,
    LOAD_PROCESSINGACH_REQUEST,
    LOAD_PROCESSINGACH_SUCCESS,
    PROCESSINGACH_SETUP,
    PROCESSINGACH_SETUP_FAIL,
    PROCESSINGACH_SETUP_SUCCESS,
} from "../constants/libraryConstants";


export const createProcessingAch = (processingData) => async (dispatch) => {
    try {
        dispatch({type: PROCESSINGACH_SETUP});
        const config = {header: {"Content-Type": "application/json"}}
        const {data} = await axios.post("/api/v1/library/achievement-setup/processingAch", processingAchData, config);

        dispatch({
            type: PROCESSINGACH_SETUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PROCESSINGACH_SETUP_FAIL,
            payload: error.response.data.message,
        });
    }
}

export const updateProcessingAch = (year, month, processingAchData) => async (dispatch) => {
    try {
        dispatch({type: PROCESSINGACH_SETUP});
        const config = {header: {"Content-Type": "application/json"}}
        const {data} = await axios.put(`/api/v1/library/achievement-setup/processingAch/${year}/${month}`
            , processingAchData,
            config);

        dispatch({
            type: PROCESSINGACH_SETUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PROCESSINGACH_SETUP_FAIL,
            payload: error.response.data.message,
        });
    }
}


// load Processing
export const getProcessingAch = (year, month) => async (dispatch) => {
    try {

        dispatch({type: LOAD_PROCESSINGACH_REQUEST});

        const {data} = await axios.get(`/api/v1/library/achievement-setup/processing/${year}/${month}`);

        dispatch({
            type: LOAD_PROCESSINGACH_SUCCESS,
            payload: data.processingAch,
        });

    } catch (error) {
        dispatch({
            type: LOAD_PROCESSINGACH_FAIL,
        });
    }
};

// Clear All Errors
export const clearErrors = () => (dispatch) => {
    dispatch({type: CLEAR_ERRORS});
}