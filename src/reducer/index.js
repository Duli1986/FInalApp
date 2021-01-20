import { combineReducers } from 'redux';
import { enableBatching } from 'redux-batched-actions';
import {reducer as formReducer} from 'redux-form';
import resourceReducer from "./resources";

const rootReducer = combineReducers({
    resources: resourceReducer,
    form: formReducer
});

export default enableBatching(rootReducer);
