import React, { Component } from 'react';
import './style.css';

const HOURS_IN_A_DAY = 24;

const BookingItem = (props) => {
    const { hour, isBooked } = props;
    let time = "12 AM"
    if (hour > 0 && hour <= 12) {
        time = hour + " AM";
    } else if (hour > 12) {
        time = (hour % 12) + " PM"
    }

    const style = isBooked ? "booking-row-booked" : "booking-row";

    return (<div className={style}>
        {time}
        </div>
    );
}

class BookingContainer extends Component {

    constructor(props) {
        super(props);
        const { slots } = props;
        this.bookingLookup = new Map();
        for (const slot of slots) {
            const { startTime, endTime } = slot;
            for (let i = startTime; i < endTime; i += 1) {
                this.bookingLookup.set(i, true);
            }
        }
    }
    
    render() {
        const rows = [];
        for (let i = 0; i < HOURS_IN_A_DAY; i++) {
            rows.push(
            <BookingItem
                hour={i}
                isBooked={this.bookingLookup.get(i)}
            />)
        }
        return (
            <div>
                <h2>Bookings</h2>
                {rows}
            </div>
        )
    }
}

export default BookingContainer;