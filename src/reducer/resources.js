import {constants} from "../constants/redoucers";

/**
 * Reducer pro resources.
 **/

const initialState = {
    items: []
};

/**
 * Nastaví state podle akce. Viz pocatecni stavy a konstanty pro akce.
 * @param state State.
 * @param action Akce.
 * @return {Object} Nový modifikovaý state nebo starý state.
 **/
export default function (state = initialState, action) {
    switch (action.type) {

        case constants.GET_RESOURCES:
            return {
                ...state,
                items: action.payload,
            };
        default:
            return state;
    }
}
