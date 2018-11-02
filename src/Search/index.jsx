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
            <div className="SearchPage">
            <form className="Container">
                <label>
                    <input type="text" 
                        onChange = {this.searchHandler}
                        value = {term}/>
                </label>
                {
                room.filter(searchingFor(term)).map ( list =>
                    <div>
                        <h2> {list.name} </h2>
                        <h2> {list.num} </h2>
                    </div>
                    )
                }
            </form>
            </div>
        );
    }
}

export default SearchPage;