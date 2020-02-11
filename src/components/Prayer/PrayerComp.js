import React from "react";
//import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";

const prayerComp = () => {
  return (
    <div className='container'>

  <div class="row">
    <div class="col-sm">
    <h1>This is prayer Component</h1>
      <p>
        "...for my house will be called a house of prayer for all nations."
        --Isaiah 56:7
      </p>
      <h2>We Believe in the Power of Prayer</h2>
      <p>
        The Prayer Ministry is made up of two areas – the Prayer Team who rely
        on the power of praying for others and the Prayer Partners who will pray
        with individuals after each of the weekend services. Both teams consist
        of people who have a passion for prayer and pray diligently,
        specifically for the needs within and outside the church, locally and
        globally.
      </p>
      <h3>Need Prayer?</h3>
      <p>
        Let us pray for you. Just fill out this form and let us know your needs.
      </p>
    </div>
    <div class="col-sm">
    <form>
      <div class="form-group">
    <label for="firstName"><strong>First Name</strong></label>
    <input type="text" class="form-control" id="first-name" placeholder="Enter Your First Name" />
  </div>
  <div class="form-group">
    <label for="lastName"><strong>Last Name</strong></label>
    <input type="text" class="form-control" id="last-name" placeholder="Enter Your Last Name" />
  </div>
  <div class="form-group">
    <label for="email"><strong>Email address</strong></label>
    <input type="email" class="form-control" id="email" placeholder="Enter Your Email Address" />
  </div>
  <div class="form-group">
    <label for="phone"><strong>Phone Number</strong></label>
    <input type="number" class="form-control" id="phone" placeholder="Enter Your Phone Number" />
  </div>
  <div class="form-group">
    <label for="textarea"><strong>Request</strong></label>
    <textarea class="form-control" id="textarea" rows="3"></textarea>
  </div>
</form>
    </div>
  
</div>
      
     
    </div>
  );
};

export default prayerComp;
