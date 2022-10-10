import axios from "axios"
import {
    CLEAR_ERRORS,
    FINANCEACH_SETUP,
    FINANCEACH_SETUP_FAIL,
    FINANCEACH_SETUP_SUCCESS,
    LOAD_FINANCEACH_FAIL,
    LOAD_FINANCEACH_REQUEST,
    LOAD_FINANCEACH_SUCCESS,
} from "../constants/libraryConstants";


export const createFinanceAch = (financeAchData) => async (dispatch) => {
    try {
        dispatch({ type: FINANCEACH_SETUP });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.post("/api/v1/library/achievement-setup/FinanceAch", financeAchData, config);

        dispatch({
            type: FINANCEACH_SETUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: FINANCEACH_SETUP_FAIL,
            payload: error.response.data.message,
        });
    }
}


export const updateFinanceAch = (year, month,financeAchData) => async (dispatch) => {
    try {
        dispatch({ type: FINANCEACH_SETUP });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.put(`/api/v1/library/achievement-setup/FinanceAch/${year}/${month}`
            , financAchData,
            config);

        dispatch({
            type: FINANCEACH_SETUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: FINANCEACH_SETUP_FAIL,
            payload: error.response.data.message,
        });
    }
}

// load Finance
export const getFinanceAch = (year, month) => async (dispatch) => {
    try {

        dispatch({ type: LOAD_FINANCEACH_REQUEST });

        const { data } = await axios.get(`/api/v1/library/achievement-setup/FinanceAch/${year}/${month}`);

        dispatch({
            type: LOAD_FINANCEACH_SUCCESS,
            payload: data.financeAch,
        });

    } catch (error) {
        dispatch({
            type: LOAD_FINANCEACH_FAIL,
        });
    }
};

// Clear All Errors
export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}