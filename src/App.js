import React, { Component } from 'react';
import './App.css';
import BookingContainer from './Booking';
import Header from './Header';
import SearchPage from './Search';
import CreateRoom from './Admin';
import Login from './Login';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      duration: 0,
      selectedPage: 1,
      login: {
        state: 0,
        admin: false,
      },
    };
    this.onHeaderItemClick = this.onHeaderItemClick.bind(this);
    this.onLoginClick = this.onLoginClick.bind(this);
  }

  onLoginClick(name,pswd) {
    if(name == "esther" && pswd == "esther") {
      this.setState({
        login: {
          state: 1,
          username: name,
          admin: true,
        } 
      })
    } else if(name == "esther1" && pswd == "esther1") {
      this.setState({
        login: {
          state: 1,
          username: name,
          admin: false,
        } 
      })
    }
  }

  onHeaderItemClick(page) {
    if(this.state.login.state == 1) {
      this.setState({
        selectedPage: page,
      })
    }
    else (alert('You\'re not logged in'))
    
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
    const { selectedPage, login } = this.state;
    // const selectedPage = this.state.selectedPage;
    return (
      <div className="App">
        <Header admin={login.admin} onItemClick={this.onHeaderItemClick}/>
          {selectedPage == 4 && login.admin && <CreateRoom/>}
          {selectedPage == 3 && <BookingContainer
          slots={slots}
          />}
          {selectedPage == 2 && <SearchPage/>}
        
      {selectedPage == 1 && <div className="loginform">
          <Login loginState={login} handleLogin={this.onLoginClick}/>
        </div>}
      </div>
    );
  }

}

export default App;
