import {
    CLEAR_ERRORS,
    COLLECTIONS_SETUP, COLLECTIONS_SETUP_FAIL, COLLECTIONS_SETUP_RESET, COLLECTIONS_SETUP_SUCCESS, CURRENT_DATE_SETUP,
    INFRASTRUCTURE_SETUP,
    INFRASTRUCTURE_SETUP_FAIL, INFRASTRUCTURE_SETUP_RESET,
    INFRASTRUCTURE_SETUP_SUCCESS
} from "../constants/libraryConstants";

// infrastructure Reducer
export const infrastructureReducer = (state = {infrastructure: {}}, {type, payload}) => {
    switch (type) {
        case INFRASTRUCTURE_SETUP:
            return {
                ...state,
                loading: true,
            };
        case INFRASTRUCTURE_SETUP_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                infrastructure: payload.infrastructure,
            };
        case INFRASTRUCTURE_SETUP_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case INFRASTRUCTURE_SETUP_RESET:
            return {
                ...state,
                success: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}

// Collections Reducer
export const collectionsReducer = (state = {collections: {}}, {type, payload}) => {
    switch (type) {
        case COLLECTIONS_SETUP:
            return {
                ...state,
                loading: true,
            };
        case COLLECTIONS_SETUP_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                collections: payload.collections,
            };
        case COLLECTIONS_SETUP_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case COLLECTIONS_SETUP_RESET:
            return {
                ...state,
                success: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}

// setupDateReducer Reducer
export const currentSetupDateReducer = (state = {currentSetupDate: {}}, {type, payload}) => {
    switch (type) {
        case CURRENT_DATE_SETUP:
            return state;
        default:
            return state;
    }
}