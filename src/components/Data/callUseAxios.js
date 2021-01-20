import React, { useState, useCallback } from "react";
import axios from "axios";

export const getDataFromDynamics = () => {
	const apiUrl = 'https://vctdev2.crm4.dynamics.com/api/data/v9.1/systemusers?$select=internalemailaddress,fullname';

	axios.get(apiUrl)
	.then(res => {
		this.setState({resource: res.data});
		console.log(this.state.resource);
	})
	.catch(error => {
		console.log(error)
	});
}
