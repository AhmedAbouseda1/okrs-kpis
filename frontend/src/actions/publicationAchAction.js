import axios from "axios"
import {
    CLEAR_ERRORS,
    PUBLICATIONACH_SETUP,
    PUBLICATIONACH_SETUP_FAIL,
    PUBLICATIONACH_SETUP_SUCCESS,
    LOAD_PUBLICATIONACH_FAIL,
    LOAD_PUBLICATIONACH_REQUEST,
    LOAD_PUBLICATIONACH_SUCCESS,
} from "../constants/libraryConstants";

/// PublicationAch
export const createPublicationAch = (PublicationAchData) => async (dispatch) => {
    try {
        dispatch({ type: PUBLICATIONACH_SETUP });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.post("/api/v1/library/achievement-setup/PublicationAch", PublicationAchData, config);

        dispatch({
            type: PUBLICATIONACH_SETUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PUBLICATIONACH_SETUP_FAIL,
            payload: error.response.data.message,
        });
    }
}


export const updatePublicationAch  = (year, month,PublicationAchData) => async (dispatch) => {
    try {
        dispatch({ type: PUBLICATIONACH_SETUP });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.put(`/api/v1/library/achievement-setup/PublicationAch/${year}/${month}`
            , PublicationAchData,
            config);

        dispatch({
            type: PUBLICATIONACH_SETUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PUBLICATIONACH_SETUP_FAIL,
            payload: error.response.data.message,
        });
    }
}

// load Finance
export const getPublicationAch = (year, month) => async (dispatch) => {
    try {

        dispatch({ type:LOAD_PUBLICATIONACH_REQUEST });

        const { data } = await axios.get(`/api/v1/library/achievement-setup/PublicationAch/${year}/${month}`);

        dispatch({
            type: LOAD_PUBLICATIONACH_SUCCESS,
            payload: data.PublicationAch,
        });

    } catch (error) {
        dispatch({
            type: LOAD_PUBLICATIONACH_FAIL,
        });
    }
};

// Clear All Errors
export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}