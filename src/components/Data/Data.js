import axios from "../../axios-bookings";

function getUserData(apiUrl){

    axios.get(apiUrl)
    .then(res => {
        this.setState({ resource: res.data });
        console.log(this.state.resource);
    })
    .catch(error => {
        console.log(error)
    });

    const RenderList = props => {
        const data = this.state.resource.value;
        const mappedData =
        <ul>
            {data.map(item => (
              <li key={item.systemuserid}>{item.fullname}</li>
            ))}
          </ul>
        return mappedData
      }

    return RenderList
}

export default getUserData
    

