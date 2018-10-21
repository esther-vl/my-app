import React, {Component} from 'react';


class Header extends Component {

    render() {
        return (<div>
                <ul onClick={() => this.props.onItemClick(2)}>Search</ul>
                <ul onClick={() => this.props.onItemClick(3)}>Booking</ul>
            </div>
            )
    }
}

export default Header;