import axios from "axios"
import {
    CLEAR_ERRORS,
    USERSACH_SETUP,
    USERSACH_SETUP_FAIL,
    USERSACH_SETUP_SUCCESS,
    LOAD_USERSACH_FAIL,
    LOAD_USERSACH_REQUEST,
    LOAD_USERSACH_SUCCESS,
} from "../constants/libraryConstants";

//UsersAch
export const createUsersAch = (UsersAchData) => async (dispatch) => {
    try {
        dispatch({ type: USERSACH_SETUP });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.post("/api/v1/library/achievement-setup/UsersAch", UsersAchData, config);

        dispatch({
            type:USERSACH_SETUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: USERSACH_SETUP_FAIL,
            payload: error.response.data.message,
        });
    }
}


export const updateUsersAch  = (year, month,UsersAchData) => async (dispatch) => {
    try {
        dispatch({ type: USERSACH_SETUP });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.put(`/api/v1/library/achievement-setup/UsersAch/${year}/${month}`
            , UsersAchData,
            config);

        dispatch({
            type: USERSACH_SETUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: USERSACH_SETUP_FAIL,
            payload: error.response.data.message,
        });
    }
}

// load Finance
export const getUsersAch = (year, month) => async (dispatch) => {
    try {

        dispatch({ type: LOAD_USERSACH_REQUEST });

        const { data } = await axios.get(`/api/v1/library/achievement-setup/UsersAch/${year}/${month}`);

        dispatch({
            type: LOAD_USERSACH_SUCCESS,
            payload: data.UsersAch,
        });

    } catch (error) {
        dispatch({
            type: LOAD_USERSACH_FAIL,
        });
    }
};

// Clear All Errors
export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}