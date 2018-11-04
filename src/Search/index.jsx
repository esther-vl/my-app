import React, { Component} from 'react';
import './style.css';

const room = [
    {
        name: "Joel",
        num: 1001
    },
    {
        name: "Rachael",
        num: 1002
    },
    {
        name: "Monica",
        num: 1003
    },
    {
        name: "Monica 2",
        num: 1004
    },
    {
        name: "Rose",
        num: 1005
    }
]

function searchingFor(term){
    return function(x){
        return x.name.toLowerCase().startsWith(term.toLowerCase()) || !term;
    }
}

class SearchPage extends Component {
    constructor(props){
    super(props);

    this.state = {
        room : room,
        term: '',
    }

    this.searchHandler = this.searchHandler.bind(this);
}

searchHandler(event){
    this.setState({term: event.target.value})
}

    render() {
        const {term, room} = this.state;
        return (
            <div className="search-page">
            <input type="text" 
                placeholder="Search Room"
                onChange = {this.searchHandler}
                value = {term}/>
            <table className="table table-bordered search-table">
              <tr>
                <th>Room Number</th>
                <th>Room Name</th>
              </tr>
              {
              room.filter(searchingFor(term)).map ( list =>
                  <tr>
                      <td>{list.num}</td>
                      <td>{list.name}</td>
                  </tr>
                  )
              }
            </table>
            </div>
        );
    }
}

export default SearchPage;
