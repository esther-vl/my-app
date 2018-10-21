import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookingContainer from './Booking';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      duration: 0,
    };
  }

  dummySlots() {
    const slots = [];
    slots.push({
      startTime: 1,
      endTime: 3,
    });

    slots.push({
      startTime: 4,
      endTime: 6,
    });
    slots.push({
      startTime: 12,
      endTime: 15,
    });
    slots.push({
      startTime: 19,
      endTime: 21,
    });
    return slots;
  }

  render() {
    const slots = this.dummySlots();
    return (
      <div>
        <BookingContainer
          slots={slots}
        />
      </div>
    );
  }

}

export default App;
