import {
    CLEAR_ERRORS,
    COLLECTIONS_SETUP,
    COLLECTIONS_SETUP_FAIL,
    COLLECTIONS_SETUP_RESET,
    COLLECTIONS_SETUP_SUCCESS,
    CURRENT_DATE_SETUP,
    INFRASTRUCTURE_SETUP,
    INFRASTRUCTURE_SETUP_FAIL,
    INFRASTRUCTURE_SETUP_RESET,
    INFRASTRUCTURE_SETUP_SUCCESS,
    FINANCE_SETUP,
    FINANCE_SETUP_FAIL,
    FINANCE_SETUP_RESET,
    FINANCE_SETUP_SUCCESS,

    FINANCEACH_SETUP,
    FINANCEACH_SETUP_FAIL,
    FINANCEACH_SETUP_RESET,
    FINANCEACH_SETUP_SUCCESS,

    PROCESSINGACH_SETUP,
    PROCESSINGACH_SETUP_FAIL,
    PROCESSINGACH_SETUP_RESET,
    PROCESSINGACH_SETUP_SUCCESS,

    TRAININGACH_SETUP,
    TRAININGACH_SETUP_FAIL,
    TRAININGACH_SETUP_RESET,
    TRAININGACH_SETUP_SUCCESS,

    USERSACH_SETUP,
    USERSACH_SETUP_FAIL,
    USERSACH_SETUP_RESET,
    USERSACH_SETUP_SUCCESS,

    GENERALACH_SETUP,
    GENERALACH_SETUP_FAIL,
    GENERALACH_SETUP_RESET,
    GENERALACH_SETUP_SUCCESS,

    CIRCULATIONACH_SETUP,
    CIRCULATIONACH_SETUP_FAIL,
    CIRCULATIONACH_SETUP_RESET,
    CIRCULATIONACH_SETUP_SUCCESS,

    PUBLICATIONACH_SETUP,
    PUBLICATIONACH_SETUP_FAIL,
    PUBLICATIONACH_SETUP_RESET,
    PUBLICATIONACH_SETUP_SUCCESS,

    ACTIVITESACH_SETUP,
    ACTIVITESACH_SETUP_FAIL,
    ACTIVITESACH_SETUP_RESET,
    ACTIVITESACH_SETUP_SUCCESS,


    HUMAN_RESOURCES_SETUP,
    HUMAN_RESOURCES_SETUP_FAIL,
    HUMAN_RESOURCES_SETUP_RESET,
    HUMAN_RESOURCES_SETUP_SUCCESS,
    PROCESSING_SETUP,
    PROCESSING_SETUP_FAIL,
    PROCESSING_SETUP_RESET,
    PROCESSING_SETUP_SUCCESS,
    LOAD_INFRASTRUCTURE_SUCCESS,
    LOAD_COLLECTIONS_SUCCESS,
    LOAD_PROCESSING_SUCCESS,
    LOAD_HUMAN_RESOURCES_SUCCESS,
    LOAD_INFRASTRUCTURE_REQUEST,
    LOAD_INFRASTRUCTURE_FAIL,
    LOAD_COLLECTIONS_REQUEST,
    LOAD_COLLECTIONS_FAIL,
    LOAD_PROCESSING_REQUEST,
    LOAD_PROCESSING_FAIL,
    LOAD_HUMAN_RESOURCES_REQUEST,
    LOAD_HUMAN_RESOURCES_FAIL, LOAD_FINANCE_REQUEST, LOAD_FINANCE_SUCCESS, LOAD_FINANCE_FAIL,


    LOAD_CIRCULATIONACH_REQUEST,
    LOAD_CIRCULATIONACH_SUCCESS,
    LOAD_CIRCULATIONACH_FAIL   ,

    LOAD_ACTIVITESACH_REQUEST,
    LOAD_ACTIVITESACH_SUCCESS,
    LOAD_ACTIVITESACH_FAIL   ,

    LOAD_FINANCEACH_REQUEST,
    LOAD_FINANCEACH_SUCCESS,
    LOAD_FINANCEACH_FAIL   ,

    LOAD_PROCESSINGACH_REQUEST,
    LOAD_PROCESSINGACH_SUCCESS,
    LOAD_PROCESSINGACH_FAIL   ,

    LOAD_USERSACH_REQUEST,
    LOAD_USERSACH_SUCCESS,
    LOAD_USERSACH_FAIL   ,

    LOAD_TRAININGACH_REQUEST,
    LOAD_TRAININGACH_SUCCESS,
    LOAD_TRAININGACH_FAIL,

    LOAD_GENERALACH_REQUEST,
    LOAD_GENERALACH_SUCCESS,
    LOAD_GENERALACH_FAIL   ,

    LOAD_PUBLICATIONACH_REQUEST,
    LOAD_PUBLICATIONACH_SUCCESS,
    LOAD_PUBLICATIONACH_FAIL,


} from "../constants/libraryConstants";

// infrastructure Reducer
export const infrastructureReducer = (state = {infrastructure: {}}, {type, payload}) => {
    switch (type) {
        case LOAD_INFRASTRUCTURE_REQUEST:
        case INFRASTRUCTURE_SETUP:
            return {
                ...state,
                loading: true,
            };
        case LOAD_INFRASTRUCTURE_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                infrastructure: payload,
            };
        case INFRASTRUCTURE_SETUP_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                infrastructure: payload.infrastructure,
            };
        case LOAD_INFRASTRUCTURE_FAIL:
            return {
                ...state,
                loading: false,
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
        case LOAD_COLLECTIONS_REQUEST:
        case COLLECTIONS_SETUP:
            return {
                ...state,
                loading: true,
            };
        case LOAD_COLLECTIONS_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                collections: payload,
            };
        case COLLECTIONS_SETUP_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                collections: payload.collections,
            };
        case LOAD_COLLECTIONS_FAIL:
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


// processing Reducer
export const processingReducer = (state = {processing: {}}, {type, payload}) => {
    switch (type) {
        case LOAD_PROCESSING_REQUEST:
        case PROCESSING_SETUP:
            return {
                ...state,
                loading: true,
            };
        case  LOAD_PROCESSING_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                processing: payload,
            };
        case  PROCESSING_SETUP_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                processing: payload.processing,
            };
        case  LOAD_PROCESSING_FAIL:
        case  PROCESSING_SETUP_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case  PROCESSING_SETUP_RESET:
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


//  humanResources Reducer
export const humanResourcesReducer = (state = {humanResources: {}}, {type, payload}) => {
    switch (type) {
        case LOAD_HUMAN_RESOURCES_REQUEST:
        case HUMAN_RESOURCES_SETUP:
            return {
                ...state,
                loading: true,
            };
        case  LOAD_HUMAN_RESOURCES_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                humanResources: payload,
            };
        case HUMAN_RESOURCES_SETUP_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                humanResources: payload.humanResources,
            };
        case  LOAD_HUMAN_RESOURCES_FAIL:
        case HUMAN_RESOURCES_SETUP_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case HUMAN_RESOURCES_SETUP_RESET:
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

// finance Reducer
export const financeReducer = (state = {finance: {}}, {type, payload}) => {
    switch (type) {
        case LOAD_FINANCE_REQUEST:
        case  FINANCE_SETUP:
            return {
                ...state,
                loading: true,
            };
        case LOAD_FINANCE_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                finance: payload,
            };
        case  FINANCE_SETUP_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                finance: payload.finance,
            };
        case LOAD_FINANCE_FAIL:
        case  FINANCE_SETUP_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case  FINANCE_SETUP_RESET:
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

export const activitesReducer = (state = {activites: {}}, {type, payload}) => {
    switch (type) {
        case LOAD_ACTIVITESACH_REQUEST:
        case  ACTIVITESACH_SETUP:
            return {
                ...state,
                loading: true,
            };
        case LOAD_ACTIVITESACH_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                activites: payload,
            };
        case  ACTIVITESACH_SETUP_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                activites: payload.finance,
            };
        case LOAD_ACTIVITESACH_FAIL:
        case  ACTIVITESACH_SETUP_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case  ACTIVITESACH_SETUP_RESET:
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


export const circulaionReducer = (state = {circulaion: {}}, {type, payload}) => {
    switch (type) {
        case LOAD_CIRCULATIONACH_REQUEST:
        case  CIRCULATIONACH_SETUP:
            return {
                ...state,
                loading: true,
            };
        case LOAD_ACTIVITESACH_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                circulaion: payload,
            };
        case  CIRCULATIONACH_SETUP_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                circulaion: payload.finance,
            };
        case LOAD_CIRCULATIONACH_FAIL:
        case  CIRCULATIONACH_SETUP_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case  CIRCULATIONACH_SETUP_RESET:
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


export const financeAchReducer = (state = {financeAch: {}}, {type, payload}) => {
    switch (type) {
        case LOAD_FINANCEACH_REQUEST:
        case  FINANCEACH_SETUP:
            return {
                ...state,
                loading: true,
            };
        case LOAD_FINANCEACH_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                financeAch: payload,
            };
        case  FINANCEACH_SETUP_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                financeAch: payload.finance,
            };
        case LOAD_FINANCEACH_FAIL:
        case  FINANCEACH_SETUP_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case  FINANCEACH_SETUP_RESET:
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


export const generalReducer = (state = {general: {}}, {type, payload}) => {
    switch (type) {
        case LOAD_GENERALACH_REQUEST:
        case  GENERALACH_SETUP:
            return {
                ...state,
                loading: true,
            };
        case LOAD_GENERALACH_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                general: payload,
            };
        case  GENERALACH_SETUP_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                general: payload.finance,
            };
        case LOAD_GENERALACH_FAIL:
        case  GENERALACH_SETUP_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case  GENERALACH_SETUP_RESET:
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

export const publicationReducer = (state = {publicationAch: {}}, {type, payload}) => {
    switch (type) {
        case LOAD_PUBLICATIONACH_REQUEST:
        case PUBLICATIONACH_SETUP:
            return {
                ...state,
                loading: true,
            };
        case  LOAD_PUBLICATIONACH_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                publicationAch: payload,
            };
        case  PUBLICATIONACH_SETUP_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                publicationAch: payload.processing,
            };
        case  LOAD_PUBLICATIONACH_FAIL:
        case  PUBLICATIONACH_SETUP_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case  PUBLICATIONACH_SETUP_RESET:
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

export const publicationAchReducer = (state = {publicationAch: {}}, {type, payload}) => {
    switch (type) {
        case LOAD_PROCESSINGACH_REQUEST:
        case PUBLICATIONACH_SETUP:
            return {
                ...state,
                loading: true,
            };
        case  LOAD_PUBLICATIONACH_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                publicationAch: payload,
            };
        case  PUBLICATIONACH_SETUP_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                publicationAch: payload.processing,
            };
        case  LOAD_PUBLICATIONACH_FAIL:
        case  PUBLICATIONACH_SETUP_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case  PUBLICATIONACH_SETUP_RESET:
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


export const usersAchReducer = (state = {usersAch: {}}, {type, payload}) => {
    switch (type) {
        case LOAD_USERSACH_REQUEST:
        case USERSACH_SETUP:
            return {
                ...state,
                loading: true,
            };
        case  LOAD_USERSACH_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                usersAch: payload,
            };
        case  USERSACH_SETUP_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                usersAch: payload.processing,
            };
        case  LOAD_USERSACH_FAIL:
        case  USERSACH_SETUP_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case  USERSACH_SETUP_RESET:
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

export const trainingAchReducer = (state = {trainingAch: {}}, {type, payload}) => {
    switch (type) {
        case LOAD_TRAININGACH_REQUEST:
        case TRAININGACH_SETUP:
            return {
                ...state,
                loading: true,
            };
        case  LOAD_TRAININGACH_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                trainingAch: payload,
            };
        case  TRAININGACH_SETUP_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                trainingAch: payload.processing,
            };
        case  LOAD_TRAININGACH_FAIL:
        case  TRAININGACH_SETUP_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case  TRAININGACH_SETUP_RESET:
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