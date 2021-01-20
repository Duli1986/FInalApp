import React from "react";
import axios from "../../axios-bookings";

export function getNewResource(){
	axios.defaults.baseURL = 'https://vctdev2.crm4.dynamics.com';
	axios.defaults.headers.common['X-Mashape-Key'] = "MY-API-KEY";
	axios.get('https://vctdev2.crm4.dynamics.com/api/api/data/v9.1/systemusers?$select=internalemailaddress')
	.then(res => {
		this.setState({ players: res.data });
		console.log(this.state.players);
	})
	.catch(error => {
		console.log(error)
	})
}
