import React, { Component } from "react";
import Calendar from "react-calendar";
//import CarouselComp from './CarouselComp';
import './event.css';
import Carousel from './Carsoule';

class CalenderComp extends Component {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });

  render() {
    return (
      <div >
<Carousel  />
      <div className="container">

        <div class="row" >
          <div class="col-sm-6">
            <Calendar onChange={this.onChange} value={this.state.date} />
          </div>
          <div class="col-sm-6">
            <form>
              <div class="form-group">
                <button type="button" class="btn btn-light btn-sm">
                  Week
                </button>
                <button type="button" class="btn btn-light btn-sm">
                  Month
                </button>
                <input type="text" class="form-control" id="events" />
              </div>
            </form>
          </div>
        </div>
        </div>
        </div>
    );
  }
}

export default CalenderComp;
