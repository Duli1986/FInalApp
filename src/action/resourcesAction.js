import axios from "../axios-bookings";
import {constants} from "../constants/redoucers";

export const getAllResources = () => (dispatch, getState) => {
    axios.get('https://vctdev2.crm4.dynamics.com/api/data/v9.1/systemusers?$select=internalemailaddress,fullname')
        .then(res => {
            this.setState({resource: res.data});
            dispatch({type: constants.GET_RESOURCES, payload: res.data})
        })
        .catch(error => {
            JSON.stringify(error);
            console.log(error)
        });
};
