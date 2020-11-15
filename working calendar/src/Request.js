import React, {Component} from 'react';
import axios from 'axios';
import './index.css';

class Request extends Component {
    constructor(props){
      super(props)

      this.state = {
        email: '',
        fullName: '',
        phoneNumber: '',
        date: '',
        time: ''
      }
    }
    changeHandler = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = (e) =>{
      e.preventDefault()
      console.log(this.state)
      axios.post('https://jsonbox.io/box_92aa341e6b23a12a8c96/test', this.state)
      .then(response =>{
        console.log(response)
        alert("Your appointment request has been sent.")
      })
      .then(error =>{
        console.log(error)
      })
    }

  render(){
    const {email, fullName, phoneNumber, date, time} = this.state
    return(
      <div id="requestwhole">
        <form onSubmit={this.submitHandler}>
          <div className="requestbox">
            <label for="email" className="labels" >Email</label>
            <input type="email" name="email" id="email" value={email} onChange ={this.changeHandler} />
          </div>
          <div className="requestbox">
            <label for="fullName" className="labels">Full Name</label>
            <input type="text" name="fullName" id="fullName" value={fullName} onChange ={this.changeHandler} />
          </div>
          <div className="requestbox">
            <label for="phoneNumber" className="labels">Phone Number</label>
            <input type="number" name="phoneNumber" id="phoneNumber" value={phoneNumber} onChange ={this.changeHandler} />
          </div>
          <div className="requestbox">
            <label for="date" className="labels">Date</label>
            <input type="date" name="date" id="date" value={date} onChange ={this.changeHandler} />
          </div>
          <div className="requestbox">
            <label for="time" className="labels">Time</label>
            <input type="time" name="time" id="time" value={time} onChange ={this.changeHandler} />
          </div>
          <button type="submit" 
            disabled={!this.state.email}
            disabled={!this.state.fullName} 
            disabled={!this.state.phoneNumber} 
            disabled={!this.state.date} 
            disabled={!this.state.time} 
            id="submit">
            Submit Request
          </button>
        </form>
      </div>
    )
  }
}

export default Request