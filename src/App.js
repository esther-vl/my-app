import React, { Component } from 'react';
import './App.css';
import BookingContainer from './Booking';
import Header from './Header';
import SearchPage from './Search';
import CreateRoom from './Admin';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      duration: 0,
      selectedPage: 1,
    };
    this.onHeaderItemClick = this.onHeaderItemClick.bind(this);
  }

  onHeaderItemClick(page) {
    this.setState({
      selectedPage: page,
    })
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
    const { selectedPage } = this.state;
    // const selectedPage = this.state.selectedPage;
    return (
      <div className="App">
        <Header onItemClick={this.onHeaderItemClick}/>
        {selectedPage == 4 && <CreateRoom/>}
        {selectedPage == 3 && <BookingContainer
          slots={slots}
        />}
        {selectedPage == 2 && <SearchPage/>}
        {selectedPage == 1 && <div>Hey home page</div>}
      </div>
    );
  }

}

export default App;
