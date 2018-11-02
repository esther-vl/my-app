import React, {Component} from 'react';
import './style.css'

class Header extends Component {

    render() {
        return (<ul className="header">
                {this.props.admin &&<li onClick={() => this.props.onItemClick(4)}>Admin</li>}
                <li onClick={() => this.props.onItemClick(3)}>Booking</li>
                <li onClick={() => this.props.onItemClick(2)}>Search</li>
            </ul>
            )
    }
}

export default Header;