import React, {Component} from 'react';
import axios from 'axios';
import './index.css';

class RequestHistory extends Component {
    constructor(props){
      super(props)

      this.state = {
        requests:[]
      }
    }

    componentDidMount(){
        axios.get('https://jsonbox.io/box_92aa341e6b23a12a8c96/test')
        .then(response =>{
            console.log(response)
            this.setState({requests: response.data})
        })
        .catch(error =>{
            console.log(error)
        })
    }

    deleteRequest = (requestsId) => {
        axios.delete("https://jsonbox.io/box_92aa341e6b23a12a8c96/test/" +requestsId)
        .then(response =>{
            if(response.data != null) {
                alert("pog");
                this.setState({
                    requests: this.state.requests.filter(requests => requests._id !== requestsId)
                });
            }
        })
    };

  render(){
      const {requests} = this.state
    return(
      <div>
          <h1>Request History</h1>
          <table id="history">
              <tr>
                  <th className="tabletop">Email</th>
                  <th className="tabletop">Name</th>
                  <th className="tabletop">Phone</th>
                  <th className="tabletop">Date</th>
                  <th className="tabletop">Time</th>
                  <th className="deletetop"></th>
              </tr>
          {
              requests.length ?
              requests.map(requests => 
              <tr key={requests._createdOn}> 
                <td className="infocell">{requests.email}</td>
                <td className="infocell">{requests.fullName}</td>
                <td className="infocell">{requests.phoneNumber}</td>
                <td className="infocell">{requests.date}</td>
                <td className="infocell">{requests.time}</td>
                <td className="deletecell" onClick={this.deleteRequest.bind(this, requests._id)}>
                    x
                </td>
              </tr>
              
              ):
              null
          }
          </table>
      </div>
    )
  }
}

export default RequestHistory