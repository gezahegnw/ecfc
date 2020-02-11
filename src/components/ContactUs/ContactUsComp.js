import React from "react";
import axios from 'axios';


class contactComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        email: '',
        message: '',
        disabled: false,
        emailSent: null,
    }
}


handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
        [name]: value
    })
}


handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target);

    this.setState({
        disabled: true
    });

     axios.post('http://localhost:3000/api/contact', this.state)
        .then(res => {
            if(res.data.success) {
                this.setState({
                    disabled: false,
                    emailSent: true
                });
            } else {
                this.setState({
                    disabled: false,
                    emailSent: false
                });
            }
        })
        .catch(err => {
            console.log(err);

            this.setState({
                disabled: false,
                emailSent: false
            });
        })

}
  render () {

  return (
    <div style={{width: '60%', margin: 'auto'}}>
      <h1>This is Contact Component</h1>
      <h2>How Can We Help?</h2>
      <p>
        Complete the form below and we'll forward your inquiry to the
        appropriate team member. Please allow 2-3 business days for a response.
        If you need assistance right away, please call{" "}
        <strong>(913) 254-7450</strong> to speak with someone.
      </p>

      <form onSubmit={this.handleSubmit}>
        {/* <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            placeholder="Enter Your First name"
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="lastname">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="full-name"
            name='name'
            placeholder="Enter Your Full name"
            value={this.state.name} 
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phonenumber">Phone Number(optional)</label>
          <input
            type="text"
            className="form-control"
            id="phonenumber"
            placeholder="Enter Your Phone number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstname">Email address</label>
          <input
            className="form-control"
            placeholder="name@example.com"
            id="email" 
            name="email" 
            type="email" 
            value={this.state.email} 
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Example select</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>General Inquiry</option>
            <option>Login/Username/Password Assistance</option>
            <option>Feedback About The Website</option>
            <option>Contributions/Finance</option>
            <option>Missions/Global Trips</option>
            <option>Talk To a Paster</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Inquiry</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={this.state.disabled}>
          Submit
        </button>
        {this.state.emailSent === true && <p style={{color: 'green'}}>Email Sent</p>}
        {this.state.emailSent === false && <p style={{color: 'red'}}>Email Not Sent</p>}
      </form>
    </div>
  );
  }
};

export default contactComp;
